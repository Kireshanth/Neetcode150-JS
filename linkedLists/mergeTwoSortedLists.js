//TC: O(n), SC: O(1) //not including output as extra space
var mergeTwoLists = function(list1, list2) {
    //create a dummy node and add nodes in order to it --> gives us a pointer we can return back
    //also handles base cases if lists are both EMPTY!
    let node = new ListNode;
    let current = node;
    //repeat until one of the arrays are empty
    while(list1 != null && list2 != null){
       if(list1.val >= list2.val){
           current.next = list2;
           list2 = list2.next;
       } else {
           current.next = list1;
           list1 = list1.next;
       }
       current = current.next;
   }
   if(list1 != null){
       current.next = list1;
   } else{
       current.next = list2;
   }
   //return dummy node next pointer referencing merged sorted LL
   return node.next;
};