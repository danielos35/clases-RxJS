import { fromEvent, tap } from "rxjs";
import { map } from "rxjs";

const text = document.createElement('div');
text.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum, tortor rhoncus dignissim pellentesque, ex turpis lacinia mauris, sed efficitur massa felis eget urna. Phasellus auctor interdum facilisis. Praesent laoreet eros ante, quis volutpat risus egestas vitae. Phasellus accumsan ipsum id blandit viverra. Vestibulum finibus ipsum ac urna cursus lacinia. Phasellus sed nisl nec mauris tempor rutrum eget eget ante. Phasellus fermentum turpis in magna fermentum, cursus lobortis justo convallis. Sed vitae ante ut odio dictum vestibulum a vitae nisl. Pellentesque at tristique elit, at pharetra metus.
<br/> <br/>
Mauris et bibendum velit. Vestibulum vitae quam arcu. Integer porttitor, lorem a consectetur tincidunt, orci lectus elementum erat, mattis tincidunt magna enim ac sapien. Ut pretium rhoncus dui. Donec quis fermentum metus, lacinia fermentum ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc bibendum nibh vel urna faucibus, eu commodo dui sodales. Maecenas varius risus ac nibh tempor faucibus. Vivamus sit amet lacus tincidunt, iaculis odio id, faucibus nulla. Nullam velit eros, blandit vitae cursus sit amet, consequat pharetra massa. Maecenas at ante aliquam, ullamcorper mi eget, viverra dui. Cras nulla est, viverra vel volutpat sit amet, ornare sit amet neque.
<br/><br/>
Etiam bibendum odio orci. Pellentesque eu nisl facilisis, venenatis nibh et, imperdiet velit. Donec at libero purus. Aliquam ullamcorper convallis purus, vel finibus libero facilisis nec. Duis rutrum tortor sit amet purus facilisis sodales. Cras vestibulum vestibulum dui auctor volutpat. Quisque sed odio vel ex facilisis dictum ut quis purus. Nam vel dui turpis. Vestibulum a tincidunt nisi, posuere facilisis est. In viverra tortor velit, sit amet ultrices libero dignissim vitae. Integer aliquet est eu ex luctus consequat.
<br/><br/>
Nam vel aliquet diam. Quisque eget elit auctor quam vulputate commodo. In finibus auctor lacus quis blandit. Pellentesque neque nisi, pellentesque quis sollicitudin a, laoreet at nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur elementum mi rutrum, interdum augue eu, varius risus. Curabitur porta faucibus ante, eget tristique orci hendrerit et. Suspendisse orci massa, pulvinar a odio id, feugiat congue justo. Nunc ut leo ut ipsum volutpat tempus. Pellentesque non nisl sem. Phasellus porta, purus nec fringilla iaculis, arcu odio aliquam lacus, vitae consectetur magna urna ut massa.
<br/><br/>
Nullam eget efficitur lacus. Nullam vel purus efficitur, facilisis metus a, porttitor tortor. Vivamus sagittis quam ut tortor fringilla viverra. Nam at blandit purus, quis aliquet quam. Maecenas mattis imperdiet neque, a consequat ex convallis eu. Fusce at ex sit amet quam tempus varius quis sit amet felis. Cras aliquet suscipit nisi at ullamcorper.
<br/> <br/>
Mauris et bibendum velit. Vestibulum vitae quam arcu. Integer porttitor, lorem a consectetur tincidunt, orci lectus elementum erat, mattis tincidunt magna enim ac sapien. Ut pretium rhoncus dui. Donec quis fermentum metus, lacinia fermentum ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc bibendum nibh vel urna faucibus, eu commodo dui sodales. Maecenas varius risus ac nibh tempor faucibus. Vivamus sit amet lacus tincidunt, iaculis odio id, faucibus nulla. Nullam velit eros, blandit vitae cursus sit amet, consequat pharetra massa. Maecenas at ante aliquam, ullamcorper mi eget, viverra dui. Cras nulla est, viverra vel volutpat sit amet, ornare sit amet neque.
<br/><br/>
Etiam bibendum odio orci. Pellentesque eu nisl facilisis, venenatis nibh et, imperdiet velit. Donec at libero purus. Aliquam ullamcorper convallis purus, vel finibus libero facilisis nec. Duis rutrum tortor sit amet purus facilisis sodales. Cras vestibulum vestibulum dui auctor volutpat. Quisque sed odio vel ex facilisis dictum ut quis purus. Nam vel dui turpis. Vestibulum a tincidunt nisi, posuere facilisis est. In viverra tortor velit, sit amet ultrices libero dignissim vitae. Integer aliquet est eu ex luctus consequat.
<br/><br/>
Nam vel aliquet diam. Quisque eget elit auctor quam vulputate commodo. In finibus auctor lacus quis blandit. Pellentesque neque nisi, pellentesque quis sollicitudin a, laoreet at nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur elementum mi rutrum, interdum augue eu, varius risus. Curabitur porta faucibus ante, eget tristique orci hendrerit et. Suspendisse orci massa, pulvinar a odio id, feugiat congue justo. Nunc ut leo ut ipsum volutpat tempus. Pellentesque non nisl sem. Phasellus porta, purus nec fringilla iaculis, arcu odio aliquam lacus, vitae consectetur magna urna ut massa.
<br/><br/>
Nullam eget efficitur lacus. Nullam vel purus efficitur, facilisis metus a, porttitor tortor. Vivamus sagittis quam ut tortor fringilla viverra. Nam at blandit purus, quis aliquet quam. Maecenas mattis imperdiet neque, a consequat ex convallis eu. Fusce at ex sit amet quam tempus varius quis sit amet felis. Cras aliquet suscipit nisi at ullamcorper.
<br/> <br/>
Mauris et bibendum velit. Vestibulum vitae quam arcu. Integer porttitor, lorem a consectetur tincidunt, orci lectus elementum erat, mattis tincidunt magna enim ac sapien. Ut pretium rhoncus dui. Donec quis fermentum metus, lacinia fermentum ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc bibendum nibh vel urna faucibus, eu commodo dui sodales. Maecenas varius risus ac nibh tempor faucibus. Vivamus sit amet lacus tincidunt, iaculis odio id, faucibus nulla. Nullam velit eros, blandit vitae cursus sit amet, consequat pharetra massa. Maecenas at ante aliquam, ullamcorper mi eget, viverra dui. Cras nulla est, viverra vel volutpat sit amet, ornare sit amet neque.
<br/><br/>
Etiam bibendum odio orci. Pellentesque eu nisl facilisis, venenatis nibh et, imperdiet velit. Donec at libero purus. Aliquam ullamcorper convallis purus, vel finibus libero facilisis nec. Duis rutrum tortor sit amet purus facilisis sodales. Cras vestibulum vestibulum dui auctor volutpat. Quisque sed odio vel ex facilisis dictum ut quis purus. Nam vel dui turpis. Vestibulum a tincidunt nisi, posuere facilisis est. In viverra tortor velit, sit amet ultrices libero dignissim vitae. Integer aliquet est eu ex luctus consequat.
<br/><br/>
Nam vel aliquet diam. Quisque eget elit auctor quam vulputate commodo. In finibus auctor lacus quis blandit. Pellentesque neque nisi, pellentesque quis sollicitudin a, laoreet at nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur elementum mi rutrum, interdum augue eu, varius risus. Curabitur porta faucibus ante, eget tristique orci hendrerit et. Suspendisse orci massa, pulvinar a odio id, feugiat congue justo. Nunc ut leo ut ipsum volutpat tempus. Pellentesque non nisl sem. Phasellus porta, purus nec fringilla iaculis, arcu odio aliquam lacus, vitae consectetur magna urna ut massa.
<br/><br/>
Nullam eget efficitur lacus. Nullam vel purus efficitur, facilisis metus a, porttitor tortor. Vivamus sagittis quam ut tortor fringilla viverra. Nam at blandit purus, quis aliquet quam. Maecenas mattis imperdiet neque, a consequat ex convallis eu. Fusce at ex sit amet quam tempus varius quis sit amet felis. Cras aliquet suscipit nisi at ullamcorper.
<br/> <br/>
Mauris et bibendum velit. Vestibulum vitae quam arcu. Integer porttitor, lorem a consectetur tincidunt, orci lectus elementum erat, mattis tincidunt magna enim ac sapien. Ut pretium rhoncus dui. Donec quis fermentum metus, lacinia fermentum ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc bibendum nibh vel urna faucibus, eu commodo dui sodales. Maecenas varius risus ac nibh tempor faucibus. Vivamus sit amet lacus tincidunt, iaculis odio id, faucibus nulla. Nullam velit eros, blandit vitae cursus sit amet, consequat pharetra massa. Maecenas at ante aliquam, ullamcorper mi eget, viverra dui. Cras nulla est, viverra vel volutpat sit amet, ornare sit amet neque.
<br/><br/>
Etiam bibendum odio orci. Pellentesque eu nisl facilisis, venenatis nibh et, imperdiet velit. Donec at libero purus. Aliquam ullamcorper convallis purus, vel finibus libero facilisis nec. Duis rutrum tortor sit amet purus facilisis sodales. Cras vestibulum vestibulum dui auctor volutpat. Quisque sed odio vel ex facilisis dictum ut quis purus. Nam vel dui turpis. Vestibulum a tincidunt nisi, posuere facilisis est. In viverra tortor velit, sit amet ultrices libero dignissim vitae. Integer aliquet est eu ex luctus consequat.
<br/><br/>
Nam vel aliquet diam. Quisque eget elit auctor quam vulputate commodo. In finibus auctor lacus quis blandit. Pellentesque neque nisi, pellentesque quis sollicitudin a, laoreet at nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur elementum mi rutrum, interdum augue eu, varius risus. Curabitur porta faucibus ante, eget tristique orci hendrerit et. Suspendisse orci massa, pulvinar a odio id, feugiat congue justo. Nunc ut leo ut ipsum volutpat tempus. Pellentesque non nisl sem. Phasellus porta, purus nec fringilla iaculis, arcu odio aliquam lacus, vitae consectetur magna urna ut massa.
<br/><br/>
Nullam eget efficitur lacus. Nullam vel purus efficitur, facilisis metus a, porttitor tortor. Vivamus sagittis quam ut tortor fringilla viverra. Nam at blandit purus, quis aliquet quam. Maecenas mattis imperdiet neque, a consequat ex convallis eu. Fusce at ex sit amet quam tempus varius quis sit amet felis. Cras aliquet suscipit nisi at ullamcorper.
<br/> <br/>
Mauris et bibendum velit. Vestibulum vitae quam arcu. Integer porttitor, lorem a consectetur tincidunt, orci lectus elementum erat, mattis tincidunt magna enim ac sapien. Ut pretium rhoncus dui. Donec quis fermentum metus, lacinia fermentum ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc bibendum nibh vel urna faucibus, eu commodo dui sodales. Maecenas varius risus ac nibh tempor faucibus. Vivamus sit amet lacus tincidunt, iaculis odio id, faucibus nulla. Nullam velit eros, blandit vitae cursus sit amet, consequat pharetra massa. Maecenas at ante aliquam, ullamcorper mi eget, viverra dui. Cras nulla est, viverra vel volutpat sit amet, ornare sit amet neque.
<br/><br/>
Etiam bibendum odio orci. Pellentesque eu nisl facilisis, venenatis nibh et, imperdiet velit. Donec at libero purus. Aliquam ullamcorper convallis purus, vel finibus libero facilisis nec. Duis rutrum tortor sit amet purus facilisis sodales. Cras vestibulum vestibulum dui auctor volutpat. Quisque sed odio vel ex facilisis dictum ut quis purus. Nam vel dui turpis. Vestibulum a tincidunt nisi, posuere facilisis est. In viverra tortor velit, sit amet ultrices libero dignissim vitae. Integer aliquet est eu ex luctus consequat.
<br/><br/>
Nam vel aliquet diam. Quisque eget elit auctor quam vulputate commodo. In finibus auctor lacus quis blandit. Pellentesque neque nisi, pellentesque quis sollicitudin a, laoreet at nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur elementum mi rutrum, interdum augue eu, varius risus. Curabitur porta faucibus ante, eget tristique orci hendrerit et. Suspendisse orci massa, pulvinar a odio id, feugiat congue justo. Nunc ut leo ut ipsum volutpat tempus. Pellentesque non nisl sem. Phasellus porta, purus nec fringilla iaculis, arcu odio aliquam lacus, vitae consectetur magna urna ut massa.
<br/><br/>
Nullam eget efficitur lacus. Nullam vel purus efficitur, facilisis metus a, porttitor tortor. Vivamus sagittis quam ut tortor fringilla viverra. Nam at blandit purus, quis aliquet quam. Maecenas mattis imperdiet neque, a consequat ex convallis eu. Fusce at ex sit amet quam tempus varius quis sit amet felis. Cras aliquet suscipit nisi at ullamcorper.
<br/> <br/>
Mauris et bibendum velit. Vestibulum vitae quam arcu. Integer porttitor, lorem a consectetur tincidunt, orci lectus elementum erat, mattis tincidunt magna enim ac sapien. Ut pretium rhoncus dui. Donec quis fermentum metus, lacinia fermentum ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc bibendum nibh vel urna faucibus, eu commodo dui sodales. Maecenas varius risus ac nibh tempor faucibus. Vivamus sit amet lacus tincidunt, iaculis odio id, faucibus nulla. Nullam velit eros, blandit vitae cursus sit amet, consequat pharetra massa. Maecenas at ante aliquam, ullamcorper mi eget, viverra dui. Cras nulla est, viverra vel volutpat sit amet, ornare sit amet neque.
<br/><br/>
Etiam bibendum odio orci. Pellentesque eu nisl facilisis, venenatis nibh et, imperdiet velit. Donec at libero purus. Aliquam ullamcorper convallis purus, vel finibus libero facilisis nec. Duis rutrum tortor sit amet purus facilisis sodales. Cras vestibulum vestibulum dui auctor volutpat. Quisque sed odio vel ex facilisis dictum ut quis purus. Nam vel dui turpis. Vestibulum a tincidunt nisi, posuere facilisis est. In viverra tortor velit, sit amet ultrices libero dignissim vitae. Integer aliquet est eu ex luctus consequat.
<br/><br/>
Nam vel aliquet diam. Quisque eget elit auctor quam vulputate commodo. In finibus auctor lacus quis blandit. Pellentesque neque nisi, pellentesque quis sollicitudin a, laoreet at nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur elementum mi rutrum, interdum augue eu, varius risus. Curabitur porta faucibus ante, eget tristique orci hendrerit et. Suspendisse orci massa, pulvinar a odio id, feugiat congue justo. Nunc ut leo ut ipsum volutpat tempus. Pellentesque non nisl sem. Phasellus porta, purus nec fringilla iaculis, arcu odio aliquam lacus, vitae consectetur magna urna ut massa.
<br/><br/>
Nullam eget efficitur lacus. Nullam vel purus efficitur, facilisis metus a, porttitor tortor. Vivamus sagittis quam ut tortor fringilla viverra. Nam at blandit purus, quis aliquet quam. Maecenas mattis imperdiet neque, a consequat ex convallis eu. Fusce at ex sit amet quam tempus varius quis sit amet felis. Cras aliquet suscipit nisi at ullamcorper.
`

const body = document.querySelector('body'); 
body.append(text)

const progressBar = document.createElement('div'); 
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);


// STREAMS
const scroll$ = fromEvent(document,'scroll');
scroll$.subscribe(console.log); 


// Calcular porcentaje Scroll
let calcularPorcentaScroll = (event)=>{

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    
    return (scrollTop/(scrollHeight -clientHeight)*100)
    
}

const progress$ = scroll$.pipe(
    
    map(event => calcularPorcentaScroll(event)), 
    tap(console.log)

);

progress$.subscribe(porcentaje=>{
    progressBar.style.width = `${porcentaje}%`
})