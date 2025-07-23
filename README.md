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

The Flownative Last Publisher package is installed as a regular Neos package via Composer. Simply include `flownative/neos-lastpublisher` into the dependencies of your Flow or Neos distribution:

```bash
$ composer require flownative/neos-lastpublisher
```

## Configuration

After installation, the package works out of the box without additional configuration. The publishing history is automatically tracked for all content elements that use the `Flownative.Neos.LastPublisher:Mixin.LastPublisher` mixin.

### Adding the Mixin to Your NodeTypes

To enable publishing history tracking for your custom node types, add the `Flownative.Neos.LastPublisher:Mixin.LastPublisher` mixin to your node type definition:

```yaml
'Your.Package:YourNodeType':
  superTypes:
    'Flownative.Neos.LastPublisher:Mixin.LastPublisher': true
  # ... your node type configuration
```

### Customizing the History Display

You can customize the number of history entries displayed in the inspector by configuring maximumItems.
The config will be used in the react based PublishingHistoryEditor.

```yaml
Flownative:
  LastPublisher:
    PublishingHistoryEditor:
      maximumItems: 3
```

## Inspector 

With the new PublishingHistoryEditor, we can display the last publishers for the specified node in the backend. This feature will provide a comprehensive overview of the node’s publishing history.
The icons located in the header and the dates associated with the node are accompanied by informative titles or descriptive labels. These labels enhance the user’s understanding of the node’s status and provide additional details upon hovering over them.

<img width="323" height="198" alt="Inspector for node without publishing history" src="https://github.com/user-attachments/assets/8bfeed60-12f0-4d56-875e-32859ad7cd74" />

View for an empty publishing history:

<img width="320" height="293" alt="Inspector with a history of three items" src="https://github.com/user-attachments/assets/68979d51-9388-4060-9e0f-ffd40cad97e2" />
