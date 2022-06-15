import { BubbleSorter } from './BubbleSorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumberCollection([10, 3, -5, 0]);
// numbersCollection.sort();
// console.log('sorted number array: ' + numbersCollection.data);

// const characterCollection = new CharacterCollection('dlbiahkcfgem');
// characterCollection.sort();
// console.log('sorted string: ' + characterCollection.data);

const linkList = new LinkedList();
linkList.add(500);
linkList.add(1);
linkList.add(8);
linkList.add(2);
linkList.add(-2);
linkList.add(-10);
linkList.sort();
linkList.print();
