var assert = require('assert');

var fn = require('..'),
    re = new RegExp('({' + fn.pattern + '})');

describe('case-escape', function(){
    it('should have offset but pattern', function(){
        assert.equal(fn.offset, 0);
        assert.equal(fn.limit, 1);
        assert.equal(fn.pattern, undefined);
    });

    it('should evaluate only if needed', function(){
        assert.equal(fn('\\\\{a}', true), '{a}');

        assert.equal(fn(), undefined);
        assert.equal(fn('text'), undefined);
    });
});
