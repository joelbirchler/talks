(def multiplyBy
  (fn [n]
    (fn [x] (* n x))))

((multiplyBy 6) 7)
