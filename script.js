const contents = document.getElementById('contents');
like_data.forEach((d)=>{
    contents.insertAdjacentHTML('beforeend',`
    <div class="item">
        <a href='${d["URL"]}' target='_blank'>
            <div class="info">
                <span class="star">☆${d["STAR"]}</span>
                <span class="level">?:${d["LEVEL"]}</span>
                <span class="len">文字数:${d["LEN"]}</span>
                <span class="avg">平均:${d["AVG"]}</span>
            </div>
            <img src='${d["IMG"]}'>
            <p class="title">${d["TITLE"]}</p>
        </a>
    </div>
    
    `)
})
