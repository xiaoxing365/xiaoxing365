// 链接数据
const links = [
  { name: 'IOT教程', url: './teach_IOT.html' },
  { name: '我的笔记', url: 'https://gitee.com/xiaoxing365/my-notes' },
];

const linkGrid = document.getElementById('linkGrid');
const searchInput = document.getElementById('searchInput');

function renderLinks(filteredLinks) {
  linkGrid.innerHTML = '';
  if (filteredLinks.length === 0) {
    const noResult = document.createElement('p');
    noResult.className = 'no-result';
    noResult.textContent = '未找到匹配的链接。';
    linkGrid.appendChild(noResult);
    return;
  }

  filteredLinks.forEach((link) => {
    const card = document.createElement('div');
    card.className = 'link-card';
    card.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
    linkGrid.appendChild(card);
  });
}

// 初始渲染
renderLinks(links);

// 搜索功能
searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  const filtered = links.filter(
    (link) => link.name.toLowerCase().includes(term) || link.url.toLowerCase().includes(term)
  );
  renderLinks(filtered);
});

// 返回顶部按钮显示逻辑
const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// 平滑回到顶部
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
