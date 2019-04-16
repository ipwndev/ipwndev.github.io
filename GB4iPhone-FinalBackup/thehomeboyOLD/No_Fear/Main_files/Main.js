// Created by iWeb 3.0.4 local-build-20131031

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,228),url:'Main_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Main_files/stroke_1.png'},{rect:new IWRect(2,-2,169,4),url:'Main_files/stroke_2.png'},{rect:new IWRect(171,-2,5,4),url:'Main_files/stroke_3.png'},{rect:new IWRect(171,2,5,228),url:'Main_files/stroke_4.png'},{rect:new IWRect(171,230,5,4),url:'Main_files/stroke_5.png'},{rect:new IWRect(2,230,169,4),url:'Main_files/stroke_6.png'},{rect:new IWRect(-2,230,4,4),url:'Main_files/stroke_7.png'}],new IWSize(173,232))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Main_files/MainMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
