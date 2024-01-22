ALGORITHM table_comparison
VAR
    
    a:array_name : ARRAY_OF INTEGER[3,1,7,9];
    b:array_name : ARRAY_OF INTEGER[2,4,1,9,3];
    i,j,som:INTEGER;
    test:BOOLEAN;
BEGIN
    som:=0;
    FOR i FROM 0 TO long(a) STEP 1  DO
        test:=false;
        FOR j FROM 0 TO long(b) STEP 1  DO
            IF (a[i]=b[j]) THEN
                test:=true;
            END_IF
        END_FOR
        IF (test:=false) THEN
            som:=som+a[i];
        END_IF
    END_FOR


    FOR j FROM 0 TO long(b) STEP 1  DO
        test:=false;
        FOR i FROM 0 TO longa STEP 1  DO
            IF (a[i]=b[j]) THEN
                test:=true;
            END_IF
        END_FOR
        IF (test:=false) THEN
            som:=som+b[j];
        END_IF
    END_FOR
    write(som)
END.
