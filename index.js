//
// console.log(document.querySelector('div') )
// console.log(document.getElementsByTagName('div')[0])

const getFirstSelector = function (selector){
  return document.querySelector(`${selector}`)
}

const nestedTarget = function() {
  console.log(document.getElementById('nested').querySelector('.target'))
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){ //Why is this broken?
  let lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  // cannot console.log lis
  for (var i = 0; i<lis.length; i++){
	   lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

const deepestChild = function(){
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode){
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}

//}
