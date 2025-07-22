[![MIT license](https://img.shields.io/badge/license-GPLV3-brightgreen.svg)](https://opensource.org/license/gpl-3-0)
[![Packagist](https://img.shields.io/packagist/v/flownative/lastpublisher.svg)](https://packagist.org/packages/flownative/lastpublisher)
[![Packagist](https://img.shields.io/packagist/dm/flownative/lastpublisher)](https://packagist.org/packages/flownative/lastpublisher)
[![Maintenance level: Love](https://img.shields.io/badge/maintenance-%E2%99%A1%E2%99%A1%E2%99%A1-ff69b4.svg)](https://www.flownative.com/en/products/open-source.html)

# Last Publisher for Neos CMS

This package for [Neos CMS](https://www.neos.io) allows you to track and display publishing history for your content elements. It records who published content, when it was published, and to which workspace, providing valuable audit information for content editors and administrators.

## Key Features

- Track publishing history for all content elements
- Show publisher name, publishing date, and target workspace in a separate inspector
- Configurable history display with customizable number of entries

## Installation

The Flownative Last Publisher package is installed as a regular Neos package via Composer. Simply include `flownative/lastpublisher` into the dependencies of your Flow or Neos distribution:

```bash
$ composer require flownative/lastpublisher
```

## Configuration

After installation, the package works out of the box without additional configuration. The publishing history is automatically tracked for all content elements that use the `Flownative.LastPublisher:Mixin.LastPublisher` mixin.

### Adding the Mixin to Your NodeTypes

To enable publishing history tracking for your custom node types, add the `Flownative.LastPublisher:Mixin.LastPublisher` mixin to your node type definition:

```yaml
'Your.Package:YourNodeType':
  superTypes:
    'Flownative.LastPublisher:Mixin.LastPublisher': true
  # ... your node type configuration
```

### Customizing the History Display

You can customize the number of history entries displayed in the inspector by configuring the editor options:

```yaml
'Your.Package:YourNodeType':
  properties:
    last_publishing_information:
      options:
        maximumItems: 5  # Show only the 5 most recent publishing events
```
