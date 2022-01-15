import { Component, OnInit } from '@angular/core';
import {
  faDoorClosed,
  faDoorOpen,
  faSignOutAlt,
  faPlusCircle,
  faBold,
} from '@fortawesome/free-solid-svg-icons'; //import icon
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  faDoorClosed = faDoorClosed;
  faBold = faBold;
  text: any;
  newText: any;
  start: any;
  end: any;

  bold = false;
  // span: any;
  constructor() {}

  //   assignStartAndEnd(s:any,e:any){
  // this.start =s;
  // this.end =e;
  //   }

  ngOnInit(): void {
    this.text = document.getElementById('text');
    // localStorage.setItem('text',  JSON.stringify( this.text) );

    this.newText = this.text;
  }

  makeBold() {
    this.bold = !this.bold;
    let span = document.createElement('SPAN');

    let selection = window.getSelection();
    let selectedText = selection!.toString();

    if (this.bold) {
      span.className = 'fw-1000';
    } else {
      span.className = 'fw-500';
    }
    span.textContent = selectedText;

    let range = selection!.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
    console.log('range');

    console.log(range.startContainer.nextSibling);
  }
  selectFont(font: any) {
    let span = document.createElement('SPAN');
    let selection = document.getSelection();

    let selectedText = selection!.toString();

    if (font.value == 1) {
      span.className = 'font1';
    }

    if (font.value == 2) {
      span.className = 'font2';
    }

    // span.textContent = selectedText;
    var range = selection!.getRangeAt(0);

    // if (this.span.classList.length > 0)
    // range.deleteContents();
    range.surroundContents(span);
    console.log('range');

    console.log(range.startContainer.nextSibling);

    // console.log(range.startContainer.childNodes.length);
    // console.log(this.text);

    // this.text.innerHtml = this.text.setRangeText(
    // .if (this.start > this.end) {
    //   let temp = this.start;
    //   this.start = this.end;
    //   this.end = temp;
    // }
    // this.selectedText = document.getSelection()?.toString();
    // console.log('!!!!!!!!!!!!');

    // console.log(this.selection);
    // this.newText = this.text!;
    // if (font.value == 1) {
    //   var editedText = this.replaceAt(
    //     this.start,
    //     this.end,
    //     `<span class="font1">${this.selectedText} </span>`, //
    //     this.newText!.innerText,
    //     this.selectedText
    //   ); //

    //   this.text!.innerHTML = editedText;
    //   this.newText = this.text!;
    // }
    // if (font.value == 2) {
    //   var editedText = this.replaceAt(
    //     this.start,
    //     this.end,
    //     `<span class="font2">${this.selectedText} </span>`,
    //     this.newText!.innerText,
    //     this.selectedText
    //   );
    //   this.text!.innerHTML = editedText;
    //   this.newText = this.text!;
    // }
  }
  selectColor(color: any) {
    let span = document.createElement('SPAN');
    let selection = document.getSelection();
    let selectedText = selection!.toString();

    span.className = color.value;

    // span.textContent = selectedText;
    var range = selection!.getRangeAt(0);

    // if (this.span.classList.length > 0)
    // range.deleteContents();
    range.surroundContents(span);
    console.log('range');

    console.log(range.startContainer.nextSibling);
    //   this.text!.innerHTML = editedText;
    //   this.newText = this.text!;
    // }
  }

  //             0 ,       span  ,          text              text
  replaceAt(
    index: any,
    end: any,
    replacement: any,
    text: any,
    selectedText: any
  ) {
    console.log('start');

    console.log(this.start);
    console.log('end');

    console.log(this.end);
    console.log('run');
    console.log(index);
    console.log(text.substring(end, text.length));
    console.log(text.substring(0, index));

    return (
      text.substring(0, index) + replacement + text.substring(end, text.length)
    );
  }

  // getSelectedNodes() {
  //   var selectedNodes: any = [];
  //   var sel = rangy.getSelection();
  //   for (var i = 0; i < sel.rangeCount; ++i) {
  //     selectedNodes = selectedNodes.concat(sel.getRangeAt(i).getNodes());
  //   }
  //   return selectedNodes;
  // }

  // printInnerText(ele:any){
  //   if(ele.childNodes.length >= 1){
  //      children = ele.childNodes;
  //      for(var i=0;i<children.length;i++)
  //       printInnerText(children[i])
  //   }else{
  //      console.log(ele.innerText);
  //   }
  //  }
}
