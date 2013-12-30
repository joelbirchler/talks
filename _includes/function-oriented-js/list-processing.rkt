(map sqrt (list 4 16 64))
; => '(2 4 8)

(foldl + 0 (list 1 2 3))
; => 6

(filter even? (list 2 3 4 6))
; => '(2 4 6)