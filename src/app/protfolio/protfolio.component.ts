import { Component } from '@angular/core';
interface Iphoto{
  imgSrc:string

}
@Component({
  selector: 'app-protfolio',
  imports: [],
  templateUrl: './protfolio.component.html',
  styleUrl: './protfolio.component.css'
})
export class ProtfolioComponent {
   sayHello(EventInfo:MouseEvent):void{
    console.log(EventInfo)
   }
   isHoverd=false
   hoveredIndex: number | null = null;
   onHover(isHoverd:boolean , index:number){
    this.hoveredIndex=isHoverd?index:null
   }
   imageSelected:string|null = null
   onImageClick(VimageSrc:string){
    // this.imageClick=imgSrc
    this.imageSelected=VimageSrc
    console.log("hello" , VimageSrc ) // V Mean Vairable
   }
   closeImage(){
    this.imageSelected = null
   }
   
  //  imageSrc:string[] = ["/poert1.png" , "/port2.png" , "/port3.png" , "/port2.png" ,"/port3.png" ,"/poert1.png"]
  imgList:Iphoto[]=[
    {imgSrc:"/poert1.png" } , 
    {imgSrc:"/port3.png" } , 
    {imgSrc:"/port2.png" } , 
    {imgSrc:"/port3.png" } , 
    {imgSrc:"/port2.png" } , 
    {imgSrc:"/poert1.png" } , 
  ]
}

