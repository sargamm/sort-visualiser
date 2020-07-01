import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sorter from './Sorter'
import {MergeSort , bubbleSort, QUICKSORT, InsertionSort} from './SortingAlgorithms'

class App extends Component{
  constructor(){
    super()
    this.state={
        selected:"",
        arraySize:4,
        array:[],
        speed:1050,
        sorted:false
    }
    this.handleChange=this.handleChange.bind(this)
    this.ResetArray=this.ResetArray.bind(this)
    this.bubbleSortAnimator=this.bubbleSortAnimator.bind(this)
    this.MergeSortAnimator=this.MergeSortAnimator.bind(this)
    this.QuicksortAnimator=this.QuicksortAnimator.bind(this)
    this.InsertionsortAnimator=this.InsertionsortAnimator.bind(this)
}

DisableButtons(){
  let a=document.getElementsByClassName('toolbar-element')
  for(let i=0;i<a.length;i++){
    a[i].disabled=true
  }
}
EnableButtons(){
  let a=document.getElementsByClassName('toolbar-element')
  for(let i=0;i<a.length;i++){
    a[i].disabled=false
  }
}
bubbleSortAnimator(){

  if(this.state.sorted)
    return
  let arr=[]
  this.DisableButtons()
  for(let i=0;i<this.state.arraySize;i++){
    arr.push(this.state.array[i])
  }

  let animations=bubbleSort(arr)

  for(let i=0;i<animations.length;i++){

    let arrayBars=document.getElementsByClassName('array-bar')
    if(animations[i].length!==0){
      let [index1,index2]=animations[i]
      let bar1style=arrayBars[index1].style
      let bar2style=arrayBars[index2].style
      if(i%3!==2){
      setTimeout(()=>{
        let docolor= i%3===1?"#e0cc44":"white"
        bar1style.backgroundColor=docolor;
        bar2style.backgroundColor=docolor;
        },i*(1205-this.state.speed))
      }
      else{
        setTimeout(()=>{
        let newH=arrayBars[index1].style.height
        arrayBars[index1].style.height=arrayBars[index2].style.height
        arrayBars[index2].style.height=newH
        },i*(1205-this.state.speed)/2)
      }
    }

  }

  setTimeout(()=>{
    this.EnableButtons()
  },animations.length*(1205-this.state.speed)+100)
  this.setState({ sorted:true})
}

MergeSortAnimator(){

  if(this.state.sorted)
    return
  this.DisableButtons()
  let arr=[]
  for(let i=0;i<this.state.arraySize;i++){
    arr.push(this.state.array[i])
  }
  
  let animations=MergeSort(arr)

  for(let i=0;i<animations.length;i++){

    let arrayBars=document.getElementsByClassName('array-bar')
    let [index,value]=animations[i]
    let barstyle=arrayBars[index].style
    setTimeout(()=>{
      barstyle.backgroundColor="white"
      barstyle.height=`${(value/705)*70}vh`
      setTimeout(()=>{
        barstyle.backgroundColor=" #e0cc44"
      },(1205-this.state.speed)*10)
    },i*(1205-this.state.speed))

  }
  setTimeout(()=>{
    this.EnableButtons()
  },animations.length*(1205-this.state.speed)+1000)
  this.setState({sorted:true})
}

QuicksortAnimator(){
  if(this.state.sorted)
    return
  this.DisableButtons()
  let arr=[]

  for(let i=0;i<this.state.arraySize;i++){
    arr.push(this.state.array[i])
  }

  let animations=QUICKSORT(arr)
  console.log(arr)
  for(let i=0;i<animations.length-1;i+=2){

    let arrayBars=document.getElementsByClassName('array-bar')
    let[i1,v1]=animations[i]
    let[i2,v2]=animations[i+1]
    setTimeout(()=>{
      arrayBars[i1].style.backgroundColor="white"
      arrayBars[i2].style.backgroundColor="white"
      arrayBars[i1].style.height=`${(v1/705)*70}vh`
      arrayBars[i2].style.height=`${(v2/705)*70}vh`
      console.log((v1/705)*70)
      console.log((v2/705)*70)
      setTimeout(() => {
        arrayBars[i1].style.backgroundColor="#e0cc44"
        arrayBars[i2].style.backgroundColor="#e0cc44"
      }, (1205-this.state.speed)*10);
    },i*(1205-this.state.speed)/2)

  }
  
  setTimeout(()=>{
    this.EnableButtons()
  },animations.length*(1205-this.state.speed)/2+1000)
  
  this.setState({ sorted:true})

}

InsertionsortAnimator(){

  if(this.state.sorted)
    return

  this.DisableButtons()
  let arr=[]

  for(let i=0;i<this.state.arraySize;i++){
    arr.push(this.state.array[i])
  }

  let animations=InsertionSort(arr)

  for(let i=0;i<animations.length;i++){

    let arrayBars=document.getElementsByClassName('array-bar')
    let[i1,v1]=animations[i]
    setTimeout(()=>{
      arrayBars[i1].style.backgroundColor="white"
      arrayBars[i1].style.height=`${(v1/705)*70}vh`
      setTimeout(() => {
        arrayBars[i1].style.backgroundColor="#e0cc44"
      }, (1205-this.state.speed)*10);
    },i*(1205-this.state.speed)/2)

  }

  setTimeout(()=>{
    this.EnableButtons()
  },animations.length*(1205-this.state.speed)+1000)
  
  this.setState({sorted:true})

}
componentDidMount(){
  this.ResetArray();
}
ResetArray(){
    let arr=[]
    for (let i = 0; i < this.state.arraySize; i++) {
        arr.push(Math.floor((Math.random())*700)+5);   
    }
    this.setState({
        array:arr, sorted:false
    })
}
handleChange(event){
    const {name,value}=event.target
    if(name==="arraySize")
      { 
        let arr=[]
        for (let i = 0; i < value; i++) {
        arr.push(Math.floor((Math.random())*700)+5);   
        }
        this.setState({ arraySize: value, array:arr, sorted:false})
      }
      else{
        this.setState({[name]:value})
      }
}


render(){
  return(
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <h1 class="navbar-brand" >Sort Visualiser</h1>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
      <div className="text-center">
        <p className="tool-title">length</p>
        <input className="slider toolbar-element" type="range" name="arraySize" value={this.state.arraySize} min="4" max="400" onChange={this.handleChange} step="1" disabled={this.state.active}/>
    </div>
      </li>
      <li class="nav-item">
        <div className="text-center">
        <p className="tool-title">Speed</p>
        <input className="slider toolbar-element" type="range" name="speed" value={this.state.speed} min="1050" max="1400" onChange={this.handleChange} step="10" disabled={this.state.active}/>
    </div>
      </li>
      <li class="nav-item">
        <div className=" ResetButton text-center">
        <button type="button" className="btn btn-light btn-md toolbar-element" onClick={this.ResetArray} disabled={false} >New Input</button>
    </div>
      </li>
    </ul>
    </div>
    <li class="nav-item dropdown">
        <p style={{color:"#fff"}}class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sorting Algorithms
        </p>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <button type="button" className="btn btn-light btn-block toolbar-element" onClick={this.bubbleSortAnimator} disabled={false} >Bubble Sort </button>
        <button type="button" className="btn btn-light btn-block toolbar-element" onClick={this.MergeSortAnimator} disabled={false} >Merge Sort </button>
        <button type="button" className="btn btn-light btn-block toolbar-element" onClick={this.InsertionsortAnimator} disabled={false} >Insertion Sort </button>
        <button type="button" className="btn btn-light btn-block toolbar-element" onClick={this.QuicksortAnimator} disabled={false} >Quick Sort </button>
        </div>
      </li>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa fa-bars"/>
    </button>
  </nav>
  <div className="row">
    <div className="col-md-2" ></div>
    <div className="col-md-8 col-sm-6 sorter">
    <Sorter state={this.state}/>
    </div>
    <div className="col-md-2" ></div>
</div>
  </>
  )
  }
}
export default App