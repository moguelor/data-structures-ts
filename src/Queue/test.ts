import Queue from './index';

describe('Data Structure Queue', function(){


    test('Can add elements', () => {
        const queue = new Queue();
        queue.add('a');
        queue.add('b');
        queue.add('c');
        expect(queue.data[0]).toEqual('c');
    });

    test('Can remove elements', () => {
        const queue = new Queue();
        queue.add('a');
        queue.add('b');
        queue.remove();

        expect(queue.data.length).toEqual(1);
        expect(queue.data[1]).toEqual(undefined);
        expect(queue.data[0]).toEqual('b');
    });

    test('Can peek element', () => {
        const queue = new Queue();
        queue.add('a');
        queue.add('b');
        queue.peek();
        expect(queue.peek()).toEqual('a');
    });

});

