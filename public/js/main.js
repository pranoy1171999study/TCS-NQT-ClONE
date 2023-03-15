var clearResp=document.getElementById("cr");
var markForreview=document.getElementById("mfrn");
var saveNext=document.getElementById("sn");
var submitBtn=document.getElementById("submitBtn");

var qa_section=document.getElementById("upperBackground");
var qblockContainer=document.getElementById("qbc1");
var qno=document.getElementById("qno");
var qblocks;
var currPos=-1;
var prevPos=-1;
qa_section.innerHTML="";



let qArray=[
    {
        question: "Which one of the following is an application of Stack Data Structure?",
        op1:"Managing function calls",
        op2:"The stock span problem",
        op3:"Arithmetic expression evaluation",
        op4:"All of the above",
    },
    {
        question: "Which one of the following is an application of Queue Data Structure?",
        op1:"When a resource is shared among multiple consumers.",
        op2:"When data is transferred asynchronously (data not necessarily received at same rate as sent) between two processes",
        op3:"Load Balancing",
        op4:"All of the above",
    },
    {
        question: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
        op1:"Insertion Sort",
        op2:"Quick Sort",
        op3:"Heap Sort",
        op4:"Merge Sort",
    },
    {
        question: "Which of the following is true about linked list implementation of stack?",
        op1:"In push operation, if new nodes are inserted at the beginning of linked list, then in pop operation, nodes must be removed from end.",
        op2:"In push operation, if new nodes are inserted at the end, then in pop operation, nodes must be removed from the beginning.",
        op3:"Both of the above",
        op4:"None of the above",
     },
    {
        question: "Which of the following is an advantage of adjacency list representation over adjacency matrix representation of a graph?",
        op1:"In adjacency list representation, space is saved for sparse graphs",
        op2:"DFS and BSF can be done in O(V + E) time for adjacency list representation. These operations take O(V^2) time in adjacency matrix representation. Here is V and E are number of vertices and edges respectively.",
        op3:"Adding a vertex in adjacency list representation is easier than adjacency matrix representation.",
        op4:"All of the above",
    },
    {
        question: "Suppose a circular queue of capacity (n – 1) elements is implemented with an array of n elements. Assume that the insertion and deletion operation are carried out using REAR and FRONT as array index variables, respectively. Initially, REAR = FRONT = 0. The conditions to detect queue full and queue empty are",
        op1:"Full: (REAR+1) mod n == FRONT, empty: REAR == FRONT",
        op2:"Full: (REAR+1) mod n == FRONT, empty: (FRONT+1) mod n == REAR",
        op3:"Full: REAR == FRONT, empty: (REAR+1) mod n == FRONT",
        op4:"Full: (FRONT+1) mod n == REAR, empty: REAR == FRONT",
    },
    {
        question: "A program P reads in 500 integers in the range [0..100] representing the scores of 500 students. It then prints the frequency of each score above 50. What would be the best way for P to store the frequencies? ",
        op1:"An array of 50 numbers",
        op2:"An array of 100 numbers",
        op3:"An array of 500 numbers",
        op4:"A dynamically allocated array of 550 numbers",
    },
    {
        question: "Suppose the numbers 7, 5, 1, 8, 3, 6, 0, 9, 4, 2 are inserted in that order into an initially empty binary search tree. The binary search tree uses the usual ordering on natural numbers. What is the in-order traversal sequence of the resultant tree?",
        op1:"7 5 1 0 3 2 4 6 8 9",
        op2:"0 2 4 3 1 6 5 9 8 7",
        op3:"0 1 2 3 4 5 6 7 8 9",
        op4:"9 8 6 4 2 3 0 1 5 7",
    },
    {
        question: "In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is",
        op1:"log 2 n",
        op2:"n/2",
        op3:"log 2 n – 1",
        op4:"n",
    },
    {
        question: "What is the worst case possible height of AVL tree?",
        op1:"2Logn Assume base of log is 2",
        op2:"1.44log n Assume base of log is 2",
        op3:"Depends upon implementation",
        op4:"Theta(n)",
    },
    {
        question: "Which of the following is FALSE about B/B+ tree",
        op1:"B/B+ trees grow upward while Binary Search Trees grow downward.",
        op2:"Time complexity of search operation in B/B+ tree is better than Red Black Trees in general.",
        op3:"Number of child pointers in a B/B+ tree node is always equals to number of keys in it plus one.",
        op4:"A B/B+ tree is defined by a term minimum degree. And minimum degree depends on hard disk block size, key and address sizes.",
    },
    {
        question: "The order of an internal node in a B+ tree index is the maximum number of children it can have. Suppose that a child pointer takes 6 bytes, the search field value takes 14 bytes, and the block size is 512 bytes. What is the order of the internal node?",
        op1:"24",
        op2:"25",
        op3:"26",
        op4:"27",
    },
    {
        question: "Consider a complete binary tree where the left and the right subtrees of the root are max-heaps. The lower bound for the number of operations to convert the tree to a heap is",
        op1:"Ω(logn)",
        op2:"Ω(n)",
        op3:"Ω(nlogn)",
        op4:"Ω(n2)",
    },
    {
        question: "Given a hash table T with 25 slots that stores 2000 elements, the load factor α for T is __________",
        op1:"80",
        op2:"0.0125",
        op3:"8000",
        op4:"1.25",
    },
    {
        question: "Let P be a singly linked list. Let Q be the pointer to an intermediate node x in the list. What is the worst-case time complexity of the best known algorithm to delete the node Q from the list?",
        op1:"O(n)",
        op2:"O(log2 n)",
        op3:"O(logn)",
        op4:"O(1)",
    }//,
    // {
    //     question: "",
    //     op1:"",
    //     op2:"",
    //     op3:"",
    //     op4:"",
    // },
    // {
    //     question: "",
    //     op1:"",
    //     op2:"",
    //     op3:"",
    //     op4:"",
    // },
    // {
    //     question: "",
    //     op1:"",
    //     op2:"",
    //     op3:"",
    //     op4:"",
    // }
]
let total_questions=qArray.length;
let aArray=[];
for(var i=0;i<total_questions;i++)
{
    aArray[i]=[false,false,false,false,1];
}
// 0-answeres
// 1-not answeres
// 2-mfr
// 3-a&mfr
let tempQB="";
for(var i=1;i<=total_questions;i++)
{
    tempQB+='<div class="qblocks">'+i+'</div>';
}
//console.log(total_questions);
//console.log(tempQB);
qblockContainer.innerHTML=tempQB;

qblocks=document.getElementsByClassName("qblocks");
//console.log(qblocks.length);

const loadQuestion=(pos)=>{
        prevPos=currPos;
        currPos=pos;
        //handle previous records
        if(prevPos!=-1)
        for(var i=0;i<4;i++)
        {
            var temp=document.getElementById("rb"+i);
            if(temp.checked == true)
            {
                aArray[prevPos][i]=true;
            }
            else{
                aArray[prevPos][i]=false;
            }

        }
        //change class of previous record



        qno.innerText="Question No. "+(pos+1);
        qa_section.innerHTML='<div id="question">'+
        qArray[pos].question+'</div>'+
        '<div id="options">'+
        '<input type="radio" name="rb1" id="rb0" ><span>'+qArray[pos].op1+'</span><br>'+
        '<input type="radio" name="rb2" id="rb1"><span>'+qArray[pos].op2+'</span><br>'+
        '<input type="radio" name="rb3" id="rb2"><span>'+qArray[pos].op3+'</span><br>'+
        '<input type="radio" name="rb4" id="rb3"><span>'+qArray[pos].op4+'</span>'+
        '</div>';
        //set answeer options accroding to previous user data
        for(var i=0;i<4;i++)
        {
            var temp=document.getElementById("rb"+i);
            if(aArray[currPos][i]==true)
            {
                temp.checked = true;
            }
            else{
                temp.checked = false;
            }

        }
        //console.log(aArray);
}
Array.from(qblocks).forEach((block)=>{
    block.addEventListener('click',()=>{
        let pos=block.innerText-1;
        loadQuestion(pos);
    });
});
loadQuestion(0);//on start by default


//handle click on buttons
// cr,mfrn,sn
// 0-answeres
// 1-not answeres
// 2-mfr
// 3-a&mfr
clearResp.addEventListener('click',()=>{
    document.getElementById("rb0").checked=false;
    document.getElementById("rb1").checked=false;
    document.getElementById("rb2").checked=false;
    document.getElementById("rb3").checked=false;
    aArray[currPos]=[false,false,false,false,1];
    Array.from(qblocks)[currPos].classList="qblocks";
    Array.from(qblocks)[currPos].classList.add("notAnswered");
})
markForreview.addEventListener('click',()=>{
    var c=0;
    for(var i=0;i<4;i++){
        aArray[currPos][i]=document.getElementById("rb"+i).checked;
        if( aArray[currPos][i]) c++;
    }
    if(c>0){
        //attempted + mfr
        aArray[currPos][4]=3;
        Array.from(qblocks)[currPos].classList="qblocks";
        Array.from(qblocks)[currPos].classList.add("amforReview");
    }
    else{
        aArray[currPos][4]=2;
        Array.from(qblocks)[currPos].classList="qblocks";
        Array.from(qblocks)[currPos].classList.add("mforReview");
    }
    loadQuestion((currPos+1)%(total_questions));
})
saveNext.addEventListener('click',()=>{
    var c=0;
    for(var i=0;i<4;i++){
        aArray[currPos][i]=document.getElementById("rb"+i).checked;
        //console.log( aArray[currPos][i]);
        if( aArray[currPos][i]==true) c++;
    }
    if(c>0)
    {
        aArray[currPos][4]=0;
        Array.from(qblocks)[currPos].classList="qblocks";
        Array.from(qblocks)[currPos].classList.add("answered");
    }
    else{
        aArray[currPos][4]=1;
        Array.from(qblocks)[currPos].classList="qblocks";
        Array.from(qblocks)[currPos].classList.add("notAnswered");
    }
    loadQuestion((currPos+1)%(total_questions));

})
submitBtn.addEventListener('click',()=>{
    console.log(qArray);
    console.log(aArray);
})

