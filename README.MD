# SHADOW MASTER

## What is this ?

Get perfect shadow for your next project

## Installation

`npm install shadowmaster`

`yarn add shadowmaster`

## Usage

```
import { shadowMaster } from "shadowmaster";

shadowMaster({
  selector: ".shadow-master",
  shadowType: "soft", //
  margin: 10,
  padding: 10,
});

```

### Options

Shadowmaster supports 4 options which all options:

- _selector_ - Any valid css selector works here. It defaults to _.shadow-master_ whenever none is provided

- _shadowType_ - _soft | hard_

- _margin_ - number or a string with valid unit _10, "10px", "10em", "10rem"_

- _padding_ - number or a string with valid unit _10, "10px", "10em", "10rem"_
