# Hello world javascript action

This action checks for a URL to be present in the PR description.

## Inputs

## `description-text`

**Required** The PR description. Default empty string.

## Outputs

## `pass`
a boolean to return true or false;

## `time`

The timestamp.

## Example usage

uses: actions/learn-actions@v1.1
with:
  description-text: 'Description'