const text = document.getElementById("type1");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");

text.addEventListener("input", count);

function count(e)
{
    const a = e.target.value;

    let nCount = 0;
    let cCount = 0;
    let wCount = 0;

    for(let i=0;i<a.length;i++)
    {
        if((a[i]>='a' && a[i]<='z') || (a[i]>='A' && a[i]<='Z'))
        {
            cCount += 1;
        }
        else if((a[i]>='1' && a[i]<='9'))
        {
            nCount += 1;
        }
    }
    
    wCount = a.trim().split(" ");

    wCount = wCount.filter((e) => e != "").length;

    p1.textContent = `Character: ${cCount}`
    p2.textContent = `Number: ${nCount}`
    p3.textContent = `Words: ${wCount}`
    
}

function clean()
{
    text.value=""
    p1.innerHTML= `Character: 0`
    p2.innerHTML= `Number: 0`
}