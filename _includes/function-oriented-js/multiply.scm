(define (multiplyBy n) (lambda (x) (* n x)))
((multiplyBy 42) 7)