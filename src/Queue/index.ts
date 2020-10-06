
/**
 * First In First Out.
 * 
 * - A queue is used for example in service requests.
 */
class Queue {
    
    data : any [];

    constructor(){
        this.data = [];
    }

    /**
     * Add an element to begin array.
     * 
     * Time Complexity: O(1)
     * Space Complexity: O(N)
     * @param item
     */
    add(item : any): void{
        this.data.unshift(item)
    }

    /**
     * Remove the last item of array.
     * 
     * Time Complexity: O(1)
     * Space Complexity: O(1);
     */
    remove(): any {
        return this.data.pop();
    }

    /**
     * Return the item to remove without remove it.
     * 
     * Time complexity: O(1)
     * Space Complexity: O(1)
     */
    peek(): any {
        return this.data[this.data.length - 1];
    }
}

export default Queue;