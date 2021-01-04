
function foo(a){
    var b = a;
    return a + b;
}

var c = foo(2);

// LHS 3 RHS 4
// Engine: Scope'a elinde LHS için c var mı diye sorar-------LHS
// Scope: compiler az önce yarattı der
// Engine: RHS reference için foo'yu sorar--------------------RHS
// Scope: compiler az önce yarattı der
// Engine: Tamam foo'yu çalıştırıyorum.
// Engine: LHS reference için a var mı?-----------------------LHS
// Scope: Evet compiler az önce yarattı al.
// Engine: Tamam o zaman ona 2 ata.
// Engine: LHS reference için b var mı?-----------------------LHS
// Scope: Evet compiler az önce yarattı al.
// Engine: Tamam o zaman ona atamak için RHS refence ile a getir. --RHS
// Engine: Elinde a ve b var mı?
// Scope: var
// Engine: O zaman RHS referans ile a ve b'yi getir------------- RHS
// Scope: Al bakalım.
// Engine: a ve b'yi topla
// Engine: RHS referansı ile a+b'yi dön--------------------------RHS