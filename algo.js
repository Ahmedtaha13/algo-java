ALGORITHM simpleSort
 VAR vector: ARRAY_OF INTEGER=[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5] i, j: INTEGER

PROCEDURE swap(vector, i, j)
 VAR temp: INTEGER
  BEGIN 
  temp = vector[i]
   vector[i] = vector[j]
    vector[j] = temp 
  END

PROCEDURE simpleSort(vector) VAR n: INTEGER BEGIN n = length(vector)

FOR i FROM 0 TO n - 1 DO
 FOR j FROM 0 TO n - i - 1 DO 
 IF vector[j] > vector[j + 1] THEN
  swap(vector, j, j + 1) 
  END_IF
   END_FOR
    END_FOR
     END
