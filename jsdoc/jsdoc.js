/** This is a description of the foo function. */
function foo() {}


/**
 * Represents a book.
 * @constructor
 */
function Book(title, author) {}


/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Bookkk(title, author) {}

/** @namespace */
var chat = {
  /**
   * Refer to this by {@link chat."#channel"}.
   * @namespace
   */
  "#channel": {
    /**
     * Refer to this by {@link chat."#channel".open}.
     * @type {boolean}
     * @defaultvalue
     */
    open: true,
    /**
     * Internal quotes have to be escaped by backslash. This is
     * {@link chat."#channel"."say-\"hello\""}.
     */
    'say-"hello"': function (msg) {}
  }
};

/**
 * Now we define an event in our {@link chat."#channel"} namespace.
 * @event chat."#channel"."op:announce-motd"
 */


/** @constructor */
Person2 = function () {
  /** @constructor */
  this.Idea = function () {
    this.consider = function () {
      return "hmmm";
    }
  }
}

var p = new Person2();
var i = new p.Idea();
i.consider();


/** @namespace */
var Apple = {};

(function (ns) {
  /**
   * @namespace
   * @alias Apple.Core
   */
  var core = {};

  /** Documented as Apple.Core.seed */
  core.seed = function () {};

  ns.Core = core;
})(Apple);
