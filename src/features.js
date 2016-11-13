const caniuse = require('caniuse-api')
const db = require('caniuse-db/data.json')
const fs = require('fs')
const browserslist = require('browserslist')
const featuresMap = require('./featuresMap')
const browserPrefixMap = require('./browserPrefixMap')

const generateFile = (scope, output) => {
  caniuse.setBrowserScope(scope)
  const browsers = browserslist(scope)

  const features = db.data
  const cssFeatures = []

  Object.keys(features).forEach(feature => {
    const {categories} = features[feature]
    if (
      (categories.indexOf('CSS') >= 0
      || categories.indexOf('CSS2') >= 0
      || categories.indexOf('CSS3') >= 0
      || categories.indexOf('CSS4') >= 0)
      && categories.indexOf('HTML5') < 0
      && categories.indexOf('JS API') < 0
      && categories.indexOf('DOM') < 0
    ) {
      cssFeatures.push(feature)
    }
  })

  const haveToPrefix = [] 

  cssFeatures.forEach(feature => {
    const supportedFeatures = caniuse.getSupport(feature)

    Object.keys(supportedFeatures).forEach(browser => {
      if (supportedFeatures[browser].hasOwnProperty('x')
      && browsers.indexOf(`${browser} ${supportedFeatures[browser].x}`) >= 0) {
        if (featuresMap[feature]) {
          featuresMap[feature].forEach(mapedFeature => {
            const i = haveToPrefix.findIndex(t => t.name === mapedFeature)
            
            if (i < 0) {
              haveToPrefix.push({
                name: mapedFeature,
                prefixes: [browserPrefixMap[browser]] 
              })
            } else if (haveToPrefix[i].prefixes.indexOf(browserPrefixMap[browser]) < 0) {
              haveToPrefix[i].prefixes.push(browserPrefixMap[browser])
            }
          })
        }
      }
    })
  })

  fs.writeFileSync(output, JSON.stringify(haveToPrefix))
}

module.exports = generateFile
