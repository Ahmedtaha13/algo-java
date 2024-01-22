
var 
 set1, set2: array[1..100] of integer;
 i, j, k, count: integer;

begin
 read(count); 
 for i := 1 to count do
    read(set1[i]);
  
 read(count); 
 for i := 1 to count do
    read(set2[i]);

 k := 0;
 for i := 1 to count do
 begin
    for j := 1 to count do
    begin
      if set1[i] = set2[j] then
      begin
        k := k + 1;
        break;
      end;
    end;
 end;

 write('Sum of all distinct elements from the set: ', k);
end.
