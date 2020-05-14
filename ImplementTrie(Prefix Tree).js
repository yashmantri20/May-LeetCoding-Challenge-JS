/*
Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.*/


/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new Map();
};

Trie.prototype.insert = function(word) {
  let currentNode = this.root;
  for (let ch of word) {
    if (!currentNode.has(ch)) currentNode.set(ch, new Map());
    currentNode = currentNode.get(ch);
  }
  
  currentNode.isTerminal = true;
};

Trie.prototype.search = function(word) {
  let currentNode = this.root;
  for (let ch of word) {
    currentNode = currentNode.get(ch);
    if (currentNode === undefined) return false;
  }
  
  return !!currentNode.isTerminal;
};

Trie.prototype.startsWith = function(prefix) {
  let currentNode = this.root;
  for (let ch of prefix) {
    currentNode = currentNode.get(ch);
    if (currentNode === undefined) return false;
  }
  
  return true;
};