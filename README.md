
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

    --shadow: rgba(0,0,0,0.1);
    
    }

You can also choose a different path than dist for building the css files, by doing this:

`const MyCss = new SolidCss(['black', 'white'], './my-folder/my-subfolder')`

# How to use it

This may be a bit tricky at first but you'll get used to it once you understand the logic behind the class names, down below you'll find a guide for every property that this library currently supports.

The **$** means that it works with dynamic numbers.

The **&** means that it works with dynamic colors.

### Border

-  `b-& => applies border-color with & color`
-  `bw$ => applies border-width on every corner with $ px`
-  `bwv$ => applies border-width on top and bottom sides with $ px`
-  `bwh$ => applies border-width on left and right sides with $ px`
-  `bwt$ => applies border-width on top side with $ px`
-  `bwb$ => applies border-width on bottom side with $ px`
-  `bwl$ => applies border-width on left side with $ px`
-  `bwr$ => applies border-width on right side with $ px`
-  `br$ => applies border-radius on every corner with $ intensity`
-  `brt$ => applies border-radius on top corners with $ intensity`
-  `brb$ => applies border-radius on bottom corners with $ intensity`
-  `brl$ => applies border-radius on left corners with $ intensity`
-  `brr$ => applies border-radius on right corners with $ intensity`
-  `brtl$ => applies border-radius on top-left corner with $ intensity`
-  `brtr$ => applies border-radius on top-right corner with $ intensity`
-  `brbl$ => applies border-radius on bottom-left corner with $ intensity`
-  `brbr$ => applies border-radius on bottom-right corner with $ intensity`
-  `brf$ => applies border-radius on every corner with $ px`
-  `brft$ => applies border-radius on top corners with $ px`
-  `brfb$ => applies border-radius on bottom corners with $ px`
-  `brfl$ => applies border-radius on left corners with $ px`
-  `brfr$ => applies border-radius on right corners with $ px`
-  `brftl$ => applies border-radius on top-left corner with $ px`
-  `brftr$ => applies border-radius on top-right corner with $ px`
-  `brfbl$ => applies border-radius on bottom-left corner with $ px`
-  `brfbr$ => applies border-radius on bottom-right corner with $ px`
-  `brp$ => applies border-radius on every corner with $ percentual`
-  `brpt$ => applies border-radius on top corners with $ percentual`
-  `brpb$ => applies border-radius on bottom corners with $ percentual`
-  `brpl$ => applies border-radius on left corners with $ percentual`
-  `brpr$ => applies border-radius on right corners with $ percentual`
-  `brptl$ => applies border-radius on top-left corner with $ percentual`
-  `brptr$ => applies border-radius on top-right corner with $ percentual`
-  `brpbl$ => applies border-radius on bottom-left corner with $ percentual`
-  `brpbr$ => applies border-radius on bottom-right corner with $ percentual`

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

### Display

-  `df => applies display: flex`
-  `dn => applies display: none`
-  `pen => applies pointer-events: none`
-  `pea => applies pointer-events: all`

### Flex

-  `fr => applies flex-direction: row`
-  `frr => applies flex-direction: row-reverse`
-  `fc => applies flex-direction: column`
-  `fcr => applies flex-direction: column-reverse`
-  `fw => applies flex-wrap: wrap`
-  `ff => applies flex: 1`
-  `ffr => applies flex: initial`
-  `jcfs => applies justify-content: flex-start`
-  `jcfe => applies justify-content: flex-end`
-  `jcc => applies justify-content: center`
-  `jcsb => applies justify-content: jcsb`
-  `jcsa => applies justify-content: space-around`
-  `aifs => applies align-items: flex-start`
-  `aife => applies align-items: flex-end`
-  `aic => applies align-items: center`
-  `ais => applies align-items: stretch`
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
-  `ha => applies height: auto`

### Margin

-  `m$ => applies margin on every side with $ intensity`
-  `mv$ => applies margin on top and bottom sides with $ intensity`
-  `mh$ => applies margin on left and right sides with $ intensity`
-  `mt$ => applies margin on top side with $ intensity`
-  `mb$ => applies margin on bottom side with $ intensity`
-  `ml$ => applies margin on left side with $ intensity`
-  `mr$ => applies margin on right side with $ intensity`
-  `mtn$ => applies margin on top side with negative $ intensity`
-  `mbn$ => applies margin on bottom side with negative $ intensity`
-  `mln$ => applies margin on left side with negative $ intensity`
-  `mrn$ => applies margin on right side with negative $ intensity`
-  `fm$ => applies margin on every side with $ px`
-  `fmv$ => applies margin on top and bottom sides with $ px`
-  `fmh$ => applies margin on left and right sides with $ px`
-  `fmt$ => applies margin on top side with $ px`
-  `fmb$ => applies margin on bottom side with $ px`
-  `fml$ => applies margin on left side with $ px`
-  `fmr$ => applies margin on right side with $ px`
-  `fmtn$ => applies margin on top side with negative $ px`
-  `fmbn$ => applies margin on bottom side with negative $ px`
-  `fmln$ => applies margin on left side with negative $ px`
-  `fmrn$ => applies margin on right side with negative $ px`

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
-  `ofya => applies overflow-y: auto`
-  `ofyh => applies overflow-y: hidden`
-  `ofys => applies overflow-y: scroll`
-  `ofyv => applies overflow-y: visible`

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

### Position

-  `dp => applies position: static`
-  `rp => applies position: relative`
-  `ap => applies position: absolute`
-  `sp => applies position: sticky`
-  `fp => applies position: fixed`
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
-  `s-& => applies & color to the box-shadow`

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
-  `tdu => applies text-decoration: underline`

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
-  `wa => applies width: auto`

### zIndex

-  `zi$ => applies z-index with $ value`
