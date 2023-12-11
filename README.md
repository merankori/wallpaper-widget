# Description

Widget for the macOS of the [Übersicht](http://tracesof.net/uebersicht/) application. It allows you to change the wallpaper on your desktop, including live wallpaper.

![screenshot](screenshot.png)

# Usage

Change the settings in the `settings.json`.
First, set the type of the desired media file in the `type` property, it can be "video" (mp4, mov, avi...) or "image" (gif, jpeg, png...).
The `isLocal` flag indicates whether your media file is local. If not, the source will be the file to which the URL from the `src` property leads. If yes, the source will be your local file, the name of which should be written in the `fileName` property.

# Installation

Just clone the repository or unzip the `wallpaper.widget.zip` archive into the widgets folder, which Übersicht will help you navigate to. In the file `settings.json` in the `folderName` property, enter the current folder name of this widget. By default, this is "wallpaper.widget".
Disable the "Enable interaction" function in Übersicht so that the wallpaper widget does not overlap with other widgets.
