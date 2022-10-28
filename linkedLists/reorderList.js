/*
1->2->3->4->5->6

1->6->2->5->3->4

TC: O(n), SC: O(1)
STEPS:
1) Check Base case if head is null or only one node
2) Split LL into half, two LLs using slow/fast pointer approach
3) Reverse order of second linked list
4) Create a dummy node and merge the new LL by adding from 1st LL and 2nd LL until 2nd LL is null.
*/

var reorderList = function(head) {

    if(head == null || head.next ==null) return;

    //split the LL into two halves
    let l1 = head;
    let prev = null;
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;

    let previous = null;
    let current = slow;
    let next = slow;

    while(current != null){
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    
    let dummy = new ListNode();
    let currNode = dummy;

    while(previous != null){
        if(l1 != null){
            currNode.next = l1;
            l1 = l1.next;
            currNode = currNode.next;
        }
        currNode.next = previous;
        previous = previous.next;
        currNode = currNode.next;
    }
    
}