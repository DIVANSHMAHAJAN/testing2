let ware=document.querySelector(".warehouse");
let circuit=document.querySelector(".circuit");
let XRAY=document.querySelector(".X-RAY");
let bus=document.querySelector(".bus");
let GPS=document.querySelector(".GPS");

let text=document.querySelector(".main-text");
ware.addEventListener("click",()=>
{
	console.log("done");
    text.innerHTML="Imagine that you are a worker in an Amazon delivery center. A new Black Friday order comes in with gifts ranging from socks to new headphones. With items distributed all throughout the warehouse, one can apply the TSP to figure out the most efficient route to collect all of the items in the order, and then return to the packaging station."
    
})
circuit.addEventListener("click",()=>
{
	console.log("done");
    text.innerHTML="Possibly one of the most important applications, the TSP is used to determine the most efficient way to connect different semiconductors on the board. Additionally, the problem also applies to the manufacturing of the actual boards where time to replace a drill head should be minimized by finding the best path to connect all the drillings at a certain depth."
    
})

bus.addEventListener("click",()=>
{
	console.log("done");
    text.innerHTML="Another mTSP example: The objective of the bus scheduling is to obtain collection of school bus routes such that the number of routes is minimized while still visiting every bus stop, the total distance travelled by all buses is kept at minimum, no bus is overloaded, and the time required to traverse any route does not exceed a maximum allowed policy. Each indiviual bus requires solving the TSP and then combining the routes incorporates the mTSP."
    
})

XRAY.addEventListener("click",()=>
{
	console.log("done");
    text.innerHTML="In radiology an X-Ray is composed by analyzing the reflection at certain points out of all possible reflections. Since we only care about a subset of the reflections, the TSP incorporates finding the shortest path between all the requested points in order to reduce the time that the machine spends moving."
    
})

GPS.addEventListener("click",()=>
{
	console.log("done");
    text.innerHTML="This example uses the mTSP, or multiple traveling salesman problem: Global Navigation Satelite Systems attempt to provide coverage to all locations worldwide. Yet some locations may slip through the cracks. Here, the mTSP is used in order to survey locations along possible dead zones by placing surveyor nodes while minimizing the nodes placed and the paths connecting them."
    
})
