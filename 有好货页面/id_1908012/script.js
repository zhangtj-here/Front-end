import TabView from "./TabView.js"
import ScrollView from "./ScrollView.js"

import Div from "./Div.js"
import Text from "./Text.js"
function myCreate(Class, attributes, ...children){
    console.log(children);
    
    var object = new Class();
    for(let name in attributes)
        object.setAttribute(name, attributes[name]);
    for(let child of children) {
        if(typeof child === "string") {
            object.appendChild(new Text(child));
        } else {
            object.appendChild(child);
        }
            
    }
        
    return object; 
}

var c = <TabView style="width:100%;height:100%;">
    <ScrollView tab-title="推荐" style="-webkit-overflow-scrolling:touch;overflow:scroll;background-color:lightblue;white-space:normal;font-size:50px">
     xxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
     xxxxxxxxxxxxxxxxxxx
    </ScrollView>
    <ScrollView tab-title="有趣的店"></ScrollView>
    <ScrollView tab-title="品牌新店"></ScrollView>
</TabView>
console.log(document.body);
c.appendTo(document.body);