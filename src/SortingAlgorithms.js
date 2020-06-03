function equalarray(a,b){
    if(a.length!==b.length)
        return false
    for(let i=0;i<a.length;i++){
        if(a[i]!==b[i])
                return false
    }
    return true
  }

 function bubbleSort(arr){
  let temp
  let animations=[]
  let s=[]
  for(let i=0;i<arr.length;i++){
      s.push(arr[i])
  }
  let sortedarr=s.sort((a,b)=>a-b)
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(equalarray(arr,sortedarr))
            return animations
        animations.push([j,j+1])
        animations.push([j,j+1])
      if(arr[j]>arr[j+1]){
        temp=arr[j+1]
        arr[j+1]=arr[j]
        arr[j]=temp
        animations.push([j,j+1])
      }
      else
        animations.push([])
    }
  }
  return animations
 }

 function MergeSort(arr){
    let aux=[]
    let n=arr.length
    for(let i=0;i<n;i++){
        aux.push(arr[i])
    }
    let animations=[]
    mergesort(arr,0,n-1,aux,animations)
    return animations
}
function mergesort(arr,beg,end,aux,animations){
    if(beg<end){
       let mid=Math.floor((beg+end)/2)
       mergesort(arr,beg,mid,aux,animations)
       mergesort(arr,mid+1,end,aux,animations)
       merge(arr,beg,end,mid,aux,animations)
    }
}
function merge(arr,beg,end,mid,aux,animations){
    let i=beg
    let j=mid+1
    let k=beg
    for(let x=beg;x<=end;x++){
        aux[x]=arr[x]
    }
    while(i<=mid && j<=end){
        if(aux[i]<aux[j])
        {
            arr[k]=aux[i]
            animations.push([k,aux[i]])
            k++
            i++
            
        }
        else{
            arr[k]=aux[j]
            animations.push([k,aux[j]])
            k++
            j++
            
        }
    }
    while(i<=mid){
        arr[k]=aux[i]
        animations.push([k,aux[i]])
        i++
        k++
        
    }
    while(j<=end){
        arr[k]=aux[j]
        animations.push([k,aux[j]])
        k++
        j++
        
    }
}

function QUICKSORT(arr){
    let n=arr.length
    let animations=[]
    QuickSort(arr,0,n-1,animations)
    return animations
}
function QuickSort(arr,beg,end,animations){
    if(beg>=end)
        return
    let pivot=arr[beg]
    let i=beg+1
    let j=end
    while(i<=j && i<=end && j>=beg+1){
        while(pivot>=arr[i] ){
            i++
        }
        while(pivot<arr[j]){
            j--
        }
        if(i<=j){
        animations.push([i,arr[j]])
        animations.push([j,arr[i]])
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        i++
        j--
        }
    }
    if(pivot>arr[j])
    {
    animations.push([beg,arr[j]])
    animations.push([j,arr[beg]])
    arr[beg]=arr[j]
    arr[j]=pivot
    }
    QuickSort(arr,beg,j-1,animations)
    QuickSort(arr,j+1,end,animations)
}

function InsertionSort(arr){
    let animations=[]
    let n=arr.length
    for(let i=1;i<n;i++){
        let j=i-1
        let cur=arr[i]
        while(j>=0 && arr[j]>cur){
            animations.push([j+1,arr[j]])
            arr[j+1]=arr[j]
            j--
        }
        animations.push([j+1,cur])
        arr[j+1]=cur
    }
    return animations
}

export { MergeSort, bubbleSort, QUICKSORT , InsertionSort}
