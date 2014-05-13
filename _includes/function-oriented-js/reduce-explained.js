[1, 2, 3].reduce(add); // (reduce + [1 2 3])

   memo       val       add()
    ↓          ↓           ↓
    0          1           1    <<== first call
    1          2           3    <<== second call
    3          3           6    <<== third call

// => 6
