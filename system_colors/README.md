# Origami System Colors format.

Starting on Origami v135 the color picker now provides two tabs:
One for system colors, and the old one for selecting any RGBA color

<img width="303" alt="Color Picker Tabs" src="https://user-images.githubusercontent.com/1731560/220794880-276cb533-f124-4e61-9221-8d3c1b799b91.png">

## Location

System colors need to be provided in a JSON format that would be described in the next sections. 

The file must be copied to `~/Library/Application Support/Diamond/colors.json`. Origami needs a restart to load the colors.

## Create a Color System

To define a color system:

First define an object for your color system, in this case is “ExampleColorSystem”
It needs several properties, some are unused but still needed and you should provide them even as empty.
Example:

```
{
   "ExampleColorSystem": {
      "name": "Example Color System",
      "platforms": [
         "Native",
      ],
      "colors": {},
      "colors_order": [],
      "color_groups": {},
      "color_groups_order": [],
      "palettes": […],
      "themes": […]
   }
}
```

The only three properties you need to care about are: `name`, `palettes` and `themes`.
All the other have to exist as empty or in the case of platforms, they need to have 1 value.

`name` is self explanatory, and is the what will appear here:

<img width="307" alt="System Name" src="https://user-images.githubusercontent.com/1731560/220796803-0f6f7c5b-19c6-4590-b15f-b46c320daa82.png">

What’s a Palette and what’s a theme?

I really don’t know but the main difference is that Themes have more information, have support for pairs of colors for Dark Mode and descriptions.
Overall Palettes are easier to create, require less data, but lack some features.

### Palettes

`palette` property is an array of Palette objects, meaning a system can have multiple palettes.
A Palette object must have the following properties:

* `id` Any identifier that must be unique.
* `name` The display name for the palette.
* `color_groups` Is an Object that must contain named objects that have:
  * `name` The name of the color group.
  * `colors` an array with palette color objects that must have:
    * `name` The name of the color.
    * `value` an object containing `r`, `g`, `b` and `a` properties representing the color. rgb values go from 0-255 and `a` from 0-1
    * `code` an object that needs to be empty.
* `color_order` an array with the Object names in `color_groups` that determines the order in which they will appear.

<img width="302" alt="Palette" src="https://user-images.githubusercontent.com/1731560/220801482-bab20f15-7bff-4460-ab83-997600d8d407.png">

Here's an example of that code:


```
"palettes": [
  {
    "id": "ExampleColorSystemPalette",
    "name": "Example Palette",
    "color_groups": {
      "Purple": {…},
      "White": {
        "name": "White",
        "colors": [
          {
            "name": "Always White",
            "value": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            },
            "code": {}
          },
          {
            "name": "Off White",
            "value": {
              "r": 250,
              "g": 249,
              "b": 226,
              "a": 1
            },
            "code": {}
          }
        ]
      }
    },
    "color_groups_order": [
      "Purple",
      "White"
    ]
  }
]
```

### Themes

As mentioned earlier, themes are a bit more complex, but allows you to define a light and dark mode pair for each color. Colors in themes are defined mostly by their semantic usage, so they can contain description.


`themes` property is an array of Theme objects, meaning a system can have multiple themes.
A Theme object is similar to:

```
"themes": [
  {
    "id": "ExampleTheme",
    "name": "Example Theme",
    "modes": [
      "default",
      "dark"
    ],
    "semantic_usages": {},
    "semantic_usages_order": [],
    "semantic_groups": {…},
    "semantic_groups_order": […],
    "text_usages": [],
    "icon_usages": []
  }
]
```

A lot of properties need to be left empty; others such as `modes` need to have always those same values. 
After those the properties that you should pay attention to are:

* `id` Any identifier that must be unique.
* `name` The display name for the palette.
* `semantic_groups` Is an Object that must contain named objects that have:
  * `id` any identifier that must be unique.
  * `name` The name of the color group.
  * `usages` an array with semantic color objects that must have:
    * `id` any identifier that must be unique.
    * `name` The name of the color to be displayed.
    * `description` An explanation of the proper usage of the color.
    * `code` an object that needs to be empty.
    * `modes` Is an Object that contains other objects that must have two objects, `default` and `dark`. Each object defines the color for either dark or light mode, the objects are defined with:
      * `name` a name for the color, but this is not displayed anywhere.
      * `value` an object containing `r`, `g`, `b` and `a` properties representing the color. rgb values go from 0-255 and `a` from 0-1
* `semantic_groups_order` an array with the Object names in `semantic_groups` that determines the order in which they will appear.

Here's a snippet of `semantic_groups`:
```
 "semantic_groups": {
  "elevation": {
    "id": "elevation",
    "name": "Elevation",
    "usages": [
      {
        "id": "shadowUIEmphasis",
        "name": "Shadow UI Emphasis",
        "description": null,
        "modes": {
          "default": {
            "name": "white",
            "value": {
              "r": 255,
              "g": 255,
              "b": 255,
              "a": 1
            }
          },
          "dark": {
            "name": "black",
            "value": {
              "r": 0,
              "g": 0,
              "b": 0,
              "a": 1
            }
          }
        },
        "code": {}
      },
      {
        "id": "shadowTextAndIconOnMedia",
        "name": "Shadow Text and Icon on Media",
        "description": "For text and icons over media like photos, colorful backgrounds and videos.",
        "modes": {…},
        "code": {}
      }
    ]
  },
  "icon": {…}
}
```
<img width="304" alt="Themes" src="https://user-images.githubusercontent.com/1731560/220811647-b18e8a0f-41a0-40b2-9c03-eef0d993c874.png">

Here's the full example JSON file:
[colors.json.zip](https://github.com/eromanc/origami-components/files/10809888/colors.json.zip)


