//TC: O(max(l1, l2)), SC: O(max(l1,l2)) where l1,l2 are lengths of linked lists numbers
var addTwoNumbers = function(l1, l2) {
    //create a dummy node and add both nodes and at a time, adding the result as a node to the new LL
    let dummy = new ListNode;
    let current = dummy;
    //keep track of the carry after adding each node
    let carry = 0;
    
    //if nodes are null OR carry is not 0, continue
    while(l1 != null || l2 != null || carry != 0){
        let v1 = 0;
        let v2 = 0;
        //set values of v1/v2 to node values ONLY if they're not null
        if(l1 != null){
            v1 = l1.val;
        }
        if(l2 != null){
            v2 = l2.val;
        } 
        let sum = v1 + v2 + carry;
        //reset carry after each time we add
        carry = 0;
        //determine if a new carry needs to be saved for next calculation
        if(sum > 9){
            carry = 1;
            sum -= 10;
        }
        //add result into a new node in the result LL
        current.next = new ListNode(sum);
        //update pointers, if LLs are not null update pointer to next node ELSE set pointers to stay AT NULL.
        current = current.next;
        if(l1 != null){
            l1 = l1.next; 
        } else {
            l1 = null;
        }
        if(l2 != null){
            l2 = l2.next; 
        } else {
            l2 = null;
        }
    }
    return dummy.next;
}