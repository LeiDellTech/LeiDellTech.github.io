
	      document.addEventListener('DOMContentLoaded', (event) => {
        let products = [
     ,
      { name: '跳动的线', description: '玩家需跟随音乐节奏点击，使线条转向，指引线条躲避障碍，到达终点。游戏内包含各种场景，音乐会和不同场景混合，每个关卡皆有特色' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/e74a3de0668343c4c6f7708bed188fde.apk' },
           
	
	// ——————————更多——————————示例：{ name: '', description: '' , downloadUrl: '' }, 
        ];
	

	// 获取页面元素
        let searchInput = document.getElementById('searchInput');
        let searchButton = document.getElementById('searchButton');
        let searchResults = document.getElementById('searchResults');

        // 页面加载时清空搜索结果
        searchResults.innerHTML = '';

        // 监听搜索按钮点击事件
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            if (searchTerm === '') {
                searchResults.innerHTML = '';
                return;
            }
            const filteredProducts = filterProducts(searchTerm);
            displayResults(filteredProducts);
        });

        // 过滤应用函数
        function filterProducts(searchTerm) {
            return products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                product.description.toLowerCase().includes(searchTerm)
            );
        }

        // 显示搜索结果
        function displayResults(filteredProducts) {
            searchResults.innerHTML = '';
            if (filteredProducts.length === 0) {
                searchResults.innerHTML = '<li>没有找到匹配的结果。</li>';
            } else {
                filteredProducts.forEach(product => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<strong>${product.name}</strong> - 描述：${product.description} - <button-search><a href="${product.downloadUrl}" target="_blank">下载</a></button-search>`;
                    searchResults.appendChild(listItem);
                });
            }
        }
    });
