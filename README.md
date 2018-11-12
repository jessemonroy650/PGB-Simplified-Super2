# PGB-Simplified-Super2
A Super Simple example App for Android which compiles on *Phonegap Build* that updates one HTML page app with an image and text.

This App is the same as [PGB-Simplified-Super](https://github.com/jessemonroy650/PGB-Simplified-Super) with a major acception, it places the images, css, and javascript in their own directories. 

It also adds another line of text to validate that Cordova has loaded.

**Images and CSS**

The images and the CSS are tied together. If the images do not load, it is an image or path problem. If the images are larger than the screen, then the CSS did not take.

**Text and CSS**

The value of the text field `isCordova` and the CSS are also tied together. If the text says *not working*, then the `backgroundColor` will be redish. If the text says *false*, then the `backgroundColor` will be blueish. If the text says *true*, then the `backgroundColor` will be greenish.

A dialog pops up in between transition from "initial loading" to `DOMContentLoaded` to `deviceready`. However, unless the loading completely fails, the state of the page at "initial loading" may not be seen.