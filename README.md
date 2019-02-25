
# Solid CSS

The core purpose of this library is to make you forget about writing css code but doing it in a clean way compared to other css frameworks, this is done through a procedural algorithm that builds the most used css properties.

# How to install

You can get the latest version on npm/yarn, so to install it execute one of these:

-  `npm install solid-css`
-  `yarn add solid-css`

Then you'll need to import it along with whatever initializes your project, for example the most common one is probably webpack, so you will have something like this in a webpack dev config:

    import SolidCss from 'solid-css'
    
    
    // Initializes a new css construct with the black and white colors
    
    const MyCss = new SolidCss(['black', 'white'])
    
    
    // Builds the development files which contain all the classes
    
    MyCss.build()

In the production webpack config you just have to replace the build command with minify, like this:

`MyCss.minify('./path-to-source-files')`

With the same initializations as before, so you could just use the same config and use an if else depending on the environment.

The production files will end up in a folder called "dist", there you will find all the css files that you can import.

To make the filters that use the intensity coefficient you have to define it in your main css file, along with the colors, for example:

    @import url('./dist/solid.css')
    
    
    :root {
    
    --intensity: 5px;
    
    --black: #000000;
    
    --white: #FFFFFF;
    
    }

# How to use it

This may be a bit tricky at first but you'll get used to it once you understand the logic behind the class names, down below you'll find a guide for every property that this library currently supports.

The **$** means that it works with dynamic numbers.

The **&** means that it works with dynamic colors.

### Border

-  `b-& => applies border-color with & color`
-  `bw$ => applies border-width on every corner with $ px`
-  `bwv$ => applies border-width on top and bottom corners with $ px`
-  `bwh$ => applies border-width on left and right corners with $ px`
-  `bwt$ => applies border-width on top corner with $ px`
-  `bwb$ => applies border-width on bottom corner with $ px`
-  `bwl$ => applies border-width on left corner with $ px`
-  `bwr$ => applies border-width on right corner with $ px`
-  `br$ => applies border-radius on every corner with $ intensity`
-  `brt$ => applies border-radius on top corners with $ intensity`
-  `brb$ => applies border-radius on bottom corners with $ intensity`
-  `brp$ => applies border-radius on every corner with $ percentual`
-  `brpt$ => applies border-radius on top corners with $ percentual`
-  `brpb$ => applies border-radius on bottom corners with $ percentual`

### Color

-  `bg-& => applies background-color with & color`
-  `& => applies color with & color`

### Container

-  `cn$ => applies width and height with $ px`
-  `mncn$ => applies min-width and min-height with $ px`
-  `mxcn$ => applies max-width and max-height with $ px`
-  `cnp$ => applies width and height with $ percentual`
-  `mncnp$ => applies min-width and min-height with $ percentual`
-  `mxcnp$ => applies max-width and max-height with $ percentual`
-  `cnd$ => applies width with $ vw and height with $ vh`
-  `mncnd$ => applies min-width with $ vw and min-height with $ vh`
-  `mxcnd$ => applies max-width with $ vw and max-height with $ vh`

  

### Flex

-  `fr => applies flex-direction: row`
-  `frr => applies flex-direction: row-reverse`
-  `fc => applies flex-direction: column`
-  `fcr => applies flex-direction: column-reverse`
-  `fw => applies flex-wrap: wrap`
-  `ff => applies flex: 1`
-  `jcfs => applies justify-content: flex-start`
-  `jcfe => applies justify-content: flex-end`
-  `jcc => applies justify-content: center`
-  `jcsb => applies justify-content: jcsb`
-  `jcsa => applies justify-content: space-around`
-  `aifs => applies align-items: flex-start`
-  `aife => applies align-items: flex-end`
-  `aic => applies align-items: center`
-  `asfs => applies align-self: flex-start`
-  `asfe => applies align-self: flex-end`
-  `asc => applies align-self: center`

  

### Height

-  `h$ => applies height with $ px`
-  `mnh$ => applies min-height with $ px`
-  `mxh$ => applies max-height with $ px`
-  `hp$ => applies height with $ percentual`
-  `mnhp$ => applies min-height with $ percentual`
-  `mxhp$ => applies max-height with $ percentual`
-  `hd$ => applies height with $ vh`
-  `mnhd$ => applies min-height with $ vh`
-  `mxhd$ => applies max-height with $ vh`

  

### Margin

-  `m$ => applies margin on every side with $ intensity`
-  `mv$ => applies margin on top and bottom sides with $ intensity`
-  `mh$ => applies margin on left and right sides with $ intensity`
-  `mt$ => applies margin on top side with $ intensity`
-  `mb$ => applies margin on bottom side with $ intensity`
-  `ml$ => applies margin on left side with $ intensity`
-  `mr$ => applies margin on right side with $ intensity`
-  `fm$ => applies margin on every side with $ px`
-  `fmv$ => applies margin on top and bottom sides with $ px`
-  `fmh$ => applies margin on left and right sides with $ px`
-  `fmt$ => applies margin on top side with $ px`
-  `fmb$ => applies margin on bottom side with $ px`
-  `fml$ => applies margin on left side with $ px`
-  `fmr$ => applies margin on right side with $ px`

  

### Opacity

-  `o$ => applies opacity with $ / 100 intensity`

### Overflow

-  `ofa => applies overflow: auto`
-  `ofh => applies overflow: hidden`
-  `ofs => applies overflow: scroll`
-  `ofv => applies overflow: visible`
-  `ofxa => applies overflow-x: auto`
-  `ofxh => applies overflow-x: hidden`
-  `ofxs => applies overflow-x: scroll`
-  `ofxv => applies overflow-x: visible`
-  `ofva => applies overflow-y: auto`
-  `ofvh => applies overflow-y: hidden`
-  `ofvs => applies overflow-y: scroll`
-  `ofvv => applies overflow-y: visible`

### Padding

-  `p$ => applies padding on every side with $ intensity`
-  `pv$ => applies padding on top and bottom sides with $ intensity`
-  `ph$ => applies padding on left and right sides with $ intensity`
-  `pt$ => applies padding on top side with $ intensity`
-  `pb$ => applies padding on bottom side with $ intensity`
-  `pl$ => applies padding on left side with $ intensity`
-  `pr$ => applies padding on right side with $ intensity`
-  `fp$ => applies padding on every side with $ px`
-  `fpv$ => applies padding on top and bottom sides with $ px`
-  `fph$ => applies padding on left and right sides with $ px`
-  `fpt$ => applies padding on top side with $ px`
-  `fpb$ => applies padding on bottom side with $ px`
-  `fpl$ => applies padding on left side with $ px`
-  `fpr$ => applies padding on right side with $ px`

### Placeholder

-  `ph-& => applies placeholder color with & color`

### Position

-  `at$ => applies top with $ px`
-  `ab$ => applies bottom with $ px`
-  `al$ => applies left with $ px`
-  `ar$ => applies right with $ px`
-  `atn$ => applies top with negative $ px`
-  `abn$ => applies bottom with negative $ px`
-  `aln$ => applies left with negative $ px`
-  `arn$ => applies right with negative $ px`
-  `apt$ => applies top with $ percentual`
-  `apt$ => applies bottom with $ percentual`
-  `apt$ => applies left with $ percentual`
-  `apt$ => applies right with $ percentual`
-  `aptn$ => applies top with negative $ percentual`
-  `apbn$ => applies bottom with negative $ percentual`
-  `apln$ => applies left with negative $ percentual`
-  `aprn$ => applies right with negative $ percentual`
-  `adt$ => applies top with $ intensity`
-  `adb$ => applies bottom with $ intensity`
-  `adl$ => applies left with $ intensity`
-  `adr$ => applies right with $ intensity`
-  `adtn$ => applies top with negative $ intensity`
-  `adbn$ => applies bottom with negative $ intensity`
-  `adln$ => applies left with negative $ intensity`
-  `adrn$ => applies right with negative $ intensity`

### Shadow

-  `s$ => applies box-shadow with $ px radius`
-  `s$-& => applies box-shadow with $ px radius and & color`

### Text

-  `ts$ => applies font-size with $ px`
-  `tfl => applies font-weight: 300 (thin)`
-  `tfr => applies font-weight: 400 (regular)`
-  `tfm => applies font-weight: 500 (medium)`
-  `tfsb => applies font-weight: 600 (semi-bold)`
-  `tfb => applies font-weight: 700 (bold)`
-  `tal => applies text-align: left`
-  `tac => applies text-align: center`
-  `tar => applies text-align: right`
-  `toe => applies text-overflow: ellipsis`

### Width

-  `w$ => applies width with $ px`
-  `mnw$ => applies min-width with $ px`
-  `mxw$ => applies max-width with $ px`
-  `wp$ => applies width with $ percentual`
-  `mnwp$ => applies min-width with $ percentual`
-  `mxwp$ => applies max-width with $ percentual`
-  `wd$ => applies width with $ vh`
-  `mnwd$ => applies min-width with $ vh`
-  `mxwd$ => applies max-width with $ vh`

### zIndex

-  `zi$ => applies z-index with $ value`
