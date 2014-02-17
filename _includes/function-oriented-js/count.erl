count([]) -> 0;
count([Head | Tail]) -> 1 + count(Tail).