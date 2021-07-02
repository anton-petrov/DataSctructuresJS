import Hashtable from './Hashtable';

const hashtable = new Hashtable(8); // ?
hashtable.hash('ssssssssssss') // ?
hashtable.set('Ivanov', { name: "Ivan" });
hashtable.set('123', "Anton");
hashtable.set('1', "Anton");
hashtable.set('3', "Anton");
hashtable.set('2', "Anton");
hashtable.set('dfawdf', "Anton");
hashtable.set('text', "Anton");
hashtable.set('hoghop', "Anton");
hashtable.set('3444', "Anton");
hashtable.set('df22', "Anton");
hashtable.set('qwefqw', "Anton");
hashtable.set('3444sssssssssssssssssss', "Anton");
console.log(hashtable);

/*

a = 1
b = 2
c = 3
...
z = 26

S = 'abc'
S1 = 'cba'
S2 = 'cab'
S3 = 'bac'

H1 = code(c) + code(b) + code(a)

// code(а) * (i+1) + code(б) * (i+1) + code(в) * (i+1)
// абв
// HASH(TEXT) = for i=1 to n do:
                   hash = hash + code(TEXT[i]) * i
                return hash
// HASH(TEXT) = for i=1 to n do:
                   hash = hash + code(TEXT[i]) * 5**i
                return hash
а=1 б=2 в=3 г=4 ... я=33
HASH('абв') = 1 * 1 + 2 * 2 + 3 * 3 = 14
HASH('вба') = 3 * 1 + 2 * 2 + 1 * 3 = 10
HASH('бва') = 2 * 1 + 3 * 2 + 1 * 3 = 11

[0, 1, 2, 3, ..., 31]

HASH(...) % 32

101

3 % 31 == 3
33 % 32 == 1
M % 32 -> 0..31
0 % 32, 32 % 32, 64 % 32, 96 % 32, ...
1 % 32, 33 % 32, 65 % 32, 97 % 32, ...

12 % 24 == 12
26 % 24 == 2
25 / 24 == 25 - 24 = 1 + 1 в остатке

15 % 12 == 3
3 + 12 == 15
*/