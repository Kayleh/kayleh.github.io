var customSearch;

// 函数防抖 (只执行最后一次点击)
var Debounce = (fn, t) =>{
	let delay = t || 25;
	let timer;
	return function() {
		let args = arguments;
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() =>{
			timer = null;
			fn.apply(this, args);
		},
		delay);
	}
};

(function($) {

	"use strict";
	// 将jQuery对象缓存起来 永远不要让相同的选择器在你的代码里出现多次
	// 在jQuery中最快的选择器是ID选择器,尽量使用ID代替Class 时间上大约相差100倍
	// 在class前使用tag(标签名)
	// 给选择器一个上下文
	volantis.$bodyAnchor = $('#safearea'); // 页面主体
	volantis.$topBtn = $('#s-top'); // 向上
	volantis.$wrapper = $('#wrapper'); // 整个导航栏
	volantis.$postsBtn = $('.menu .active'); // 一级导航上的当前激活的按钮
	volantis.$titleBtn = $('h1.title', '#header-meta'); // 文章内标题
	volantis.$coverAnchor = $('#l_cover .cover-wrapper');
	volantis.$switcher = $('#l_header .switcher .s-search'); // 搜索按钮   移动端
	volantis.$header = $('#l_header'); // 移动端导航栏
	volantis.$headerMenu = $('body .navigation'); // 导航列表
	volantis.$search = $('#l_header .m_search'); // 搜索框 桌面端
	volantis.$mPhoneList = $('#l_header .m-phone .list-v'); //  手机端 子菜单
	const isMobile = /mobile/i.test(window.navigator.userAgent);

	// 校正页面定位（被导航栏挡住的区域）
	var scrollCorrection = 80; // (header height = 64px) + (gap = 16px)
	if (volantis.$header[0]) {
		scrollCorrection = volantis.$header[0].clientHeight + 16;
	}

	// 尝试： 重设数据值
	function restData() {
		scrollCorrection = 80;
		if (volantis.$header[0]) {
			scrollCorrection = volantis.$header[0].clientHeight + 16;
		}
		volantis.$headerMenu = $('body .navigation');
	}

	// 校正页面定位（被导航栏挡住的区域）
	function scrolltoElement(elem, correction = scrollCorrection) {
		const $elem = elem.href ? $(decodeURI(elem.getAttribute('href'))) : $(elem);
		window.scrollTo({
			top: $elem.offset().top - correction,
			behavior: "smooth"
		});
	}

	// 设置滚动锚点
	function setScrollAnchor() {
		if (volantis.$postsBtn.length && volantis.$bodyAnchor) {
			volantis.$postsBtn.click(e =>{
				e.preventDefault();
				e.stopPropagation();
				if (volantis.$postsBtn.attr("href") != "/") // TODO: fix it
				scrolltoElement(volantis.$bodyAnchor);
				e.stopImmediatePropagation();
				volantis.$postsBtn.unbind('click');
			});
		}
		if (volantis.$titleBtn.length && volantis.$bodyAnchor) {
			volantis.$titleBtn.click(e =>{
				e.preventDefault();
				e.stopPropagation();
				scrolltoElement(volantis.$bodyAnchor);
				e.stopImmediatePropagation();
				volantis.$titleBtn.unbind('click');
			});
		}
		if (volantis.$topBtn.length && volantis.$bodyAnchor) {
			volantis.$topBtn.click(e =>{
				e.preventDefault();
				e.stopPropagation();
				scrolltoElement(volantis.$bodyAnchor);
				e.stopImmediatePropagation();
			});
		}

		//==========================================
		var showHeaderPoint = volantis.$bodyAnchor.offset().top-scrollCorrection;
		var pos = document.body.scrollTop;
		$(document, window).scroll(Debounce(() =>{
			let scrollTop = $(window).scrollTop(); // 滚动条距离顶部的距离
			const del = scrollTop - pos;
			pos = scrollTop;
			if (scrollTop > volantis.$bodyAnchor.offset().top) {
				volantis.$topBtn.addClass('show');
				if (del > 0) {
					volantis.$topBtn.removeClass('hl');
				} else {
					volantis.$topBtn.addClass('hl');
				}
			} else {
				volantis.$topBtn.removeClass('show').removeClass('hl');
			}
			if (scrollTop - showHeaderPoint  > -1) {
				volantis.$header.addClass('show');
			} else {
				volantis.$header.removeClass('show');
			}
		}));
		//==========================================
	}

	// 设置导航栏
	function setHeader() {
		if (pdata.ispage) window.subData = {
			title: pdata.postTitle,
			tools: true
		}
		if (!window.subData) return;
		volantis.$comment = $('#s-comment'); // 评论按钮  桌面端 移动端
		volantis.$toc = $('#s-toc'); // 目录按钮  仅移动端
		volantis.$commentTarget = $('#l_body article#comments'); // 评论区域
		volantis.$wrapper.find('.nav-sub .title').text(window.subData.title); // 二级导航文章标题
		// 决定一二级导航栏的切换
		let pos = document.body.scrollTop;
		$(document, window).scroll(Debounce(() =>{
			const scrollTop = $(window).scrollTop();
			const del = scrollTop - pos;
			if (del >= 50 && scrollTop > 100) {
				pos = scrollTop;
				volantis.$wrapper.addClass('sub');
			} else if (del <= -50) {
				pos = scrollTop;
				volantis.$wrapper.removeClass('sub'); // <---- 取消二级导航显示
			}
		}));

		// bind events to every btn
		if (volantis.$commentTarget.length) {
			volantis.$comment.click(e =>{ // 评论按钮点击后 跳转到评论区域
				e.preventDefault();
				e.stopPropagation();
				scrolltoElement(volantis.$commentTarget);
				e.stopImmediatePropagation();
			});
		} else volantis.$comment.remove(); // 关闭了评论，则隐藏
		volantis.$tocTarget = $('#l_body .toc-wrapper'); // 侧边栏的目录列表  PC
		if (volantis.$tocTarget.length && volantis.$tocTarget.children().length) {
			volantis.$toc.click((e) =>{
				e.stopPropagation();
				volantis.$tocTarget.toggleClass('active');
				volantis.$toc.toggleClass('active');
			});
			$(document).click(function(e) {
				e.stopPropagation();
				volantis.$tocTarget.removeClass('active');
				volantis.$toc.removeClass('active');
			});
			$(document, window).scroll(Debounce(() =>{
				volantis.$tocTarget.removeClass('active');
				volantis.$toc.removeClass('active');
			},
			100));
		} else volantis.$toc.remove();
	}

	// 设置导航栏菜单选中状态
	function setHeaderMenuSelection() {
		// 先把已经激活的取消激活
		volantis.$headerMenu.find('li a.active').removeClass('active');
		volantis.$headerMenu.find('div a.active').removeClass('active');
		function setUnderline($item) {
			if ($item && $item.length) {
				$item.addClass('active').siblings().removeClass('active');
			}
		}
		//set current active nav
		var $active_link = null;
		// replace '%' '/' '.'
		var idname = location.pathname.replace(/\/|%|\./g, "");
		if (idname.length == 0) {
			idname = "home";
		}
		var page = idname.match(/page\d{0,}$/g);
		if (page) {
			page = page[0];
			idname = idname.split(page)[0];
		}
		var index = idname.match(/index.html/);
		if (index) {
			index = index[0];
			idname = idname.split(index)[0];
		}
		// 转义字符如 [, ], ~, #, @
		idname = idname.replace(/(\[|\]|~|#|@)/g, "\\$1");
		if (idname && volantis.$headerMenu) {
			$active_link = $('#' + idname, volantis.$headerMenu);
			setUnderline($active_link);
		}
	}

	// 设置全局事件
	function setGlobalHeaderMenuEvent() {
		if (isMobile) {
			// 手机端 点击展开子菜单
			$('#l_header .m-phone li').click(function(e) {
				e.stopPropagation();
				$($(e.currentTarget).children('ul')).show();
			});
		} else {
			// PC端 hover时展开子菜单，点击时隐藏子菜单
			$('#wrapper .m-pc li > a[href]').parent().click(function(e) {
				e.stopPropagation();
				if (e.target.origin == e.target.baseURI) {
					$('#wrapper .m-pc .list-v').hide();
				}
			});
		}
		setPageHeaderMenuEvent();
	}

	function setPageHeaderMenuEvent() {
		if (!isMobile) return;
		// 手机端 点击空白处隐藏子菜单
		$(document).click(function(e) {
			volantis.$mPhoneList.hide();
		});
		// 手机端 滚动时隐藏子菜单
		$(window).scroll(Debounce(() =>{
			volantis.$mPhoneList.hide();
		}));
	}
	// 设置导航栏搜索框   fix √
	function setHeaderSearch() {
		if (volantis.$switcher.length === 0) return;
		volantis.$switcher.click(function(e) {
			e.stopPropagation();
			volantis.$header.toggleClass('z_search-open'); // 激活移动端搜索框
			volantis.$switcher.toggleClass('active'); // 搜索按钮
			volantis.$search.find('input').focus();
		});
		$(document).click(function(e) {
			volantis.$header.removeClass('z_search-open');
			volantis.$switcher.removeClass('active');
		});

		volantis.$search.click(function(e) {
			e.stopPropagation();
		});
		volantis.$header.ready(function() {
			volantis.$header.bind('keydown',
			function(event) {
				if (event.keyCode == 9) {
					return false;
				} else {
					var isie = (document.all) ? true: false;
					var key;
					var ev;
					if (isie) { //IE浏览器
						key = window.event.keyCode;
						ev = window.event;
					} else { //火狐浏览器
						key = event.which;
						ev = event;
					}
					if (key == 9) { //IE浏览器
						if (isie) {
							ev.keyCode = 0;
							ev.returnValue = false;
						} else { //火狐浏览器
							ev.which = 0;
							ev.preventDefault();
						}
					}
				}
			});
		});
	}

	// 设置 tabs 标签
	function setTabs() {
		$('.tabs .nav-tabs').on('click', 'a', (e) =>{
			e.preventDefault();
			e.stopPropagation();
			let $tab = $(e.target.parentElement.parentElement.parentElement);
			$tab.find('.nav-tabs .active').removeClass('active');
			$tab.find(e.target.parentElement).addClass('active');
			$tab.find('.tab-content .active').removeClass('active');
			$tab.find($(e.target).attr("class")).addClass('active');
			return false;
		});
	}

	$(function() {
		setHeader();
		setHeaderMenuSelection();
		setGlobalHeaderMenuEvent();
		setHeaderSearch();
		setScrollAnchor();
		setTabs();

		// 全屏封面底部箭头
		$('#scroll-down').on('click',function() {
			scrolltoElement(volantis.$bodyAnchor);
		});

		try {
			// addEventListener是先绑定先执行，此处的绑定后执行
			document.addEventListener('pjax:complete',
			function() {
				$(function() {
					restData();
					setHeader();
					setHeaderMenuSelection();
					setPageHeaderMenuEvent();
					setScrollAnchor();
					setTabs();
					// 全屏封面底部箭头
					$('#scroll-down').on('click',function() {
						scrolltoElement(volantis.$bodyAnchor);
					});
					// 处理点击事件 setHeaderSearch 没有重载，需要重新绑定单个事件
					if (volantis.$switcher.length !== 0) {
						$(document).click(function(e) {
							volantis.$header.removeClass('z_search-open');
							volantis.$switcher.removeClass('active');
						});
					}
				});

			},{passive: true});
		} catch (error) {
			// console.log(error);
		}

	});

	
	if (window.location.hash) {
		var checkExist = setInterval(function() {
			if ($("#" + decodeURI(window.location.hash.split("#")[1]).replace(/\ /g, "-")).length) {
				$('html, body').animate({
					scrollTop: $("#" + decodeURI(window.location.hash.split("#")[1]).replace(/\ /g, "-")).offset().top - 40
				},
				500);
				clearInterval(checkExist);
			}
		},
		100);
	}
})(jQuery);;var SearchService = "";

(function($) {
  
  SearchService = function(options) {
    var self = this;

    self.config = $.extend({
      per_page: 10,
      selectors: {
        body: "body",
        form: ".u-search-form",
        input: ".u-search-input",
        container: "#u-search",
        modal: "#u-search .modal",
        modal_body: "#u-search .modal-body",
        modal_footer: "#u-search .modal-footer",
        modal_overlay: "#u-search .modal-overlay",
        modal_results: "#u-search .modal-results",
        modal_metadata: "#u-search .modal-metadata",
        modal_error: "#u-search .modal-error",
        modal_loading_bar: "#u-search .modal-loading-bar",
        modal_ajax_content: "#u-search .modal-ajax-content",
        modal_logo: '#u-search .modal-footer .logo',
        btn_close: "#u-search .btn-close",
        btn_next: "#u-search .btn-next",
        btn_prev: "#u-search .btn-prev"
      },
      brands: {
        'hexo': {logo: '', url: ''},
        'google': {logo: 'google.svg', url: 'https://cse.google.com'},
        'algolia': {logo: 'algolia.svg', url: 'https://www.algolia.com'},
        'baidu': {logo: 'baidu.svg', url: 'http://zn.baidu.com/cse/home/index'},
        'azure': {logo: 'azure.svg', url: 'https://azure.microsoft.com/en-us/services/search/'}
      },
      imagePath: "https://cdn.jsdelivr.net/gh/volantis-x/cdn-volantis@master/img/"
    }, options);

    self.dom = {};
    self.percentLoaded = 0;
    self.open = false;
    self.queryText = "";
    self.nav = {
      next: -1,
      prev: -1,
      total: 0,
      current: 1
    };

    self.parseSelectors = function() {
      for (var key in self.config.selectors) {
        self.dom[key] = $(self.config.selectors[key]);
      }
    };

    self.beforeQuery = function() {
      if (!self.open) {
        self.dom.container.fadeIn();
        // self.dom.body.addClass('modal-active');
        // 上面的是去除了文章的滚动条，我觉得没必要
      }
      self.dom.input.each(function(index,elem) {
        $(elem).val(self.queryText);
      });
      document.activeElement.blur();
      self.dom.modal_error.hide();
      self.dom.modal_ajax_content.removeClass('loaded');
      self.startLoading();
    };

    self.afterQuery = function() {
      self.dom.modal_body.scrollTop(0);
      self.dom.modal_ajax_content.addClass('loaded');
      self.stopLoading();
    };

    
    self.search = function(startIndex, callback) {
      self.beforeQuery();
      if (self.search instanceof Function) {
        self.query(self.queryText, startIndex, function() {
          self.afterQuery();
        });
      }
      else {
        console.log("query() does not exist.");
        self.onQueryError(self.queryText, '');
        self.afterQuery();
      }
    };

    
    self.onQueryError = function(queryText, status) {
      var errMsg = "";
      if (status === "success") errMsg = "No result found for \"" +queryText+ "\".";
      else if (status === "timeout") errMsg = "Unfortunate timeout.";
      else errMsg = "Mysterious failure.";
      self.dom.modal_results.html("");
      self.dom.modal_error.html(errMsg);
      self.dom.modal_error.show();
    };

    self.nextPage = function() {
      if (self.nav.next !== -1) {
        self.search(self.nav.next);
      }
    };

    self.prevPage = function() {
      if (self.nav.prev !== -1) {
        self.search(self.nav.prev);
      }
    };

    self.getUrlRelativePath = function (url) {
      var arrUrl = url.split("//");
      var start = arrUrl[1].indexOf("/");
      var relUrl = arrUrl[1].substring(start);
      if (relUrl.indexOf("?") != -1) {
        relUrl = relUrl.split("?")[0];
      }
      return relUrl;
    }

    
    self.buildResult = function (url, title, digest) {
      var result = self.getUrlRelativePath(url);
      var html = "";
      html = "<li>";
      html += "<a class='result' href='" + result + "'>";
      html += "<span class='title'>" + title + "</span>";
      if (digest !== "") html += "<span class='digest'>" + digest + "</span>";
      html += "</a>";
      html += "</li>";
      return html;
    };

    
    self.close = function() {
      self.open = false;
      self.dom.container.fadeOut();
      self.dom.body.removeClass('modal-active');
    };

    
    self.onSubmit = function(event) {
      event.preventDefault();
      self.queryText = $(this).find('.u-search-input').val();
      if (self.queryText) {
        self.search(1);
      }
    };

    
    self.startLoading = function() {
      self.dom.modal_loading_bar.show();
      self.loadingTimer = setInterval(function() {
        self.percentLoaded = Math.min(self.percentLoaded+5,95);
        self.dom.modal_loading_bar.css('width', self.percentLoaded+'%');
      }, 100);
    };

    
    self.stopLoading = function() {
      clearInterval(self.loadingTimer);
      self.dom.modal_loading_bar.css('width', '100%');
      self.dom.modal_loading_bar.fadeOut();
      setTimeout(function() {
        self.percentLoaded = 0;
        self.dom.modal_loading_bar.css('width', '0%');
      }, 300);
    };

    
    self.addLogo = function(service) {
      var html = "";
      if (self.config.brands[service] && self.config.brands[service].logo) {
        html += "<a href='" +self.config.brands[service].url+ "' class='" +service+ "'>";
        html +=    '<img src="' +self.config.imagePath+self.config.brands[service].logo+ '" />';
        html += "</a>";
        self.dom.modal_logo.html(html);
      }
    };

    self.destroy = function() {
      self.dom.form.each(function(index,elem) {
        $(elem).off('submit');
      });
      self.dom.modal_overlay.off('click');
      self.dom.btn_close.off('click');
      self.dom.btn_next.off('click');
      self.dom.btn_prev.off('click');
      self.dom.container.remove();
    };

    
    self.init = function() {
      $('body').append(template);
      self.parseSelectors();
      self.dom.modal_footer.show();
      self.dom.form.each(function(index,elem) {
        $(elem).on('submit', self.onSubmit);
      });
      self.dom.modal_overlay.on('click', self.close);
      self.dom.btn_close.on('click', self.close);
      self.dom.btn_next.on('click', self.nextPage);
      self.dom.btn_prev.on('click', self.prevPage);
    };

    self.init();
  };

  var template = '<div id="u-search"><div class="modal"> <header class="modal-header" class="clearfix"><form id="u-search-modal-form" class="u-search-form" name="uSearchModalForm"> <input type="text" id="u-search-modal-input" class="u-search-input" /> <button type="submit" id="u-search-modal-btn-submit" class="u-search-btn-submit"> <span class="fas fa-search"></span> </button></form> <a class="btn-close"> <span class="fas fa-times"></span> </a><div class="modal-loading"><div class="modal-loading-bar"></div></div> </header> <main class="modal-body"><ul class="modal-results modal-ajax-content"></ul> </main> <footer class="modal-footer clearfix"><div class="modal-metadata modal-ajax-content"> <strong class="range"></strong> of <strong class="total"></strong></div><div class="modal-error"></div> <div class="logo"></div> <a class="nav btn-next modal-ajax-content"> <span class="text">NEXT</span> <span class="fal fa-chevron-right"></span> </a> <a class="nav btn-prev modal-ajax-content"> <span class="fal fa-chevron-left"></span> <span class="text">PREV</span> </a> </footer></div><div class="modal-overlay"></div></div>';
})(jQuery);

var AlgoliaSearch;
(function($) {
  'use strict';

  
  AlgoliaSearch = function(options) {
    SearchService.apply(this, arguments);
    var self = this;
    var endpoint = "https://" +self.config.appId+ "-dsn.algolia.net/1/indexes/" + self.config.indexName;
    self.addLogo('algolia');

    
    self.buildResultList = function(data) {
      var html = "";
      $.each(data, function(index, row) {
        var url = row.permalink || row.path || "";
        if (!row.permalink && row.path) {
          url = ROOT + url;
        }
        var title = row.title;
        var digest = "";
        html += self.buildResult(url, title, digest, index+1);
      });
      html += "<script>try{pjax.refresh(document.querySelector('#u-search'));document.addEventListener('pjax:send',function(){$('#u-search').fadeOut(500);$('body').removeClass('modal-active')});}catch(e){$('#u-search').fadeOut(500);}</script>";
      return html;
    };

    
    self.buildMetadata = function(data) {
      self.nav.current = data.page * data.hitsPerPage + 1;
      self.nav.currentCount = data.hits.length;
      self.nav.total = parseInt(data.nbHits);
      self.dom.modal_metadata.children('.total').html(self.nav.total);
      self.dom.modal_metadata.children('.range').html(self.nav.current + "-" + (self.nav.current+self.nav.currentCount-1));
      if (self.nav.total > 0) {
        self.dom.modal_metadata.show();
      }
      else {
        self.dom.modal_metadata.hide();
      }

      if (data.page < data.nbPages-1) {
        self.nav.next = (data.page+1)+1;
        self.dom.btn_next.show();
      }
      else {
        self.nav.next = -1;
        self.dom.btn_next.hide();
      }
      if (data.page > 0) {
        self.nav.prev = (data.page+1)-1;
        self.dom.btn_prev.show();
      }
      else {
        self.nav.prev = -1;
        self.dom.btn_prev.hide();
      }
    };

    
    self.query = function(queryText, page, callback) {
      $.get(endpoint, {
        query: queryText,
        page: page-1,
        hitsPerPage: self.config.per_page,
        "x-algolia-application-id": self.config.appId,
        "x-algolia-api-key": self.config.apiKey
      }, function(data, status) {
        if (status === 'success' && data.hits && data.hits.length > 0) {
          var results = self.buildResultList(data.hits);
          self.dom.modal_results.html(results);
        }
        else {
          self.onQueryError(queryText, status);
        }
        self.buildMetadata(data);
        if (callback) {
          callback(data);
        }
      });
    };

    return self;
  };

})(jQuery);

var AzureSearch;
(function($) {
  'use strict';

  
  AzureSearch = function(options) {
    SearchService.apply(this, arguments);
    var self = this;
    var endpoint = "https://" +self.config.serviceName+ ".search.windows.net/indexes/" +self.config.indexName+ "/docs?api-version=2015-02-28";
    self.nav.current = 1;
    self.addLogo('azure');

    
    self.buildResultList = function(data) {
      var html = "";
      $.each(data, function(index, row) {
        var url = row.permalink || row.path || "";
        if (!row.permalink && row.path) {
          url = "/" + url;
        }
        var title = row.title;
        var digest = row.excerpt || "";
        html += self.buildResult(url, title, digest);
      });
      html += "<script>try{pjax.refresh(document.querySelector('#u-search'));document.addEventListener('pjax:send',function(){$('#u-search').fadeOut(500);$('body').removeClass('modal-active')});}catch(e){$('#u-search').fadeOut(500);}</script>";
      return html;
    };

    
    self.buildMetadata = function(data, startIndex) {
      self.nav.current = startIndex;
      self.nav.currentCount = data.value.length;
      self.nav.total = parseInt(data['@odata.count']);
      self.dom.modal_metadata.children('.total').html(self.nav.total);
      self.dom.modal_metadata.children('.range').html(self.nav.current + "-" + (self.nav.current+self.nav.currentCount-1));
      if (self.nav.total > 0) {
        self.dom.modal_metadata.show();
      }
      else {
        self.dom.modal_metadata.hide();
      }

      if (self.nav.current+self.nav.currentCount <= self.nav.total) {
        self.nav.next = self.nav.current+self.nav.currentCount;
        self.dom.btn_next.show();
      }
      else {
        self.nav.next = -1;
        self.dom.btn_next.hide();
      }
      if (self.nav.current > 1) {
        self.nav.prev = self.nav.current-self.config.per_page;
        self.dom.btn_prev.show();
      }
      else {
        self.nav.prev = -1;
        self.dom.btn_prev.hide();
      }
    };

    
    self.query = function(queryText, startIndex, callback) {
      $.ajax({
        url: endpoint,
        headers: {
          "Accept": "application/json",
          "api-key": self.config.queryKey
        },
        data: {
          search: queryText,
          $orderby: "date desc",
          $skip: startIndex-1,
          $top: self.config.per_page,
          $count: true
        },
        type: "GET",
        success: function(data, status) {
          if (status === 'success' && data.value && data.value.length > 0) {
            var results = self.buildResultList(data.value);
            self.dom.modal_results.html(results);
          }
          else {
            self.onQueryError(queryText, status);
          }
          self.buildMetadata(data, startIndex);
          if (callback) {
            callback(data);
          }
        }
      });
    };

    return self;
  };

})(jQuery);

var BaiduSearch;
(function($) {
  'use strict';

  
  BaiduSearch = function(options) {
    SearchService.apply(this, arguments);
    var self = this;
    var endpoint = "";
    self.addLogo('baidu');

    
    self.buildResultList = function(data, queryText) {
      var results = [],
          html = "";
      $.each(data, function(index, post) {
        if (self.contentSearch(post, queryText))
          html += self.buildResult(post.linkUrl, post.title, post.abstract);
      });
      html += "<script>try{pjax.refresh(document.querySelector('#u-search'));document.addEventListener('pjax:send',function(){$('#u-search').fadeOut(500);$('body').removeClass('modal-active')});}catch(e){$('#u-search').fadeOut(500);}</script>";
      return html;
    };

    
    self.buildMetadata = function(data) {

    };

    self.loadScript = function() {
      self.dom.input.each(function(index,elem) {
        $(elem).attr('disabled', true);
      });
      var script = "<script src='http://zhannei.baidu.com/api/customsearch/apiaccept?sid=" +self.config.apiId+ "&v=2.0&callback=customSearch.initBaidu' type='text/javascript' charset='utf-8'></script>";
      self.dom.body.append(script);
    };

    self.initBaidu = function() {
      self.cse = new BCse.Search(self.config.apiId);
      //self.cse.setPageNum(self.config.per_page);
      self.dom.input.each(function(index,elem) {
        $(elem).attr('disabled', false);
      });
    };

    
    self.query = function(queryText, page, callback) {
      self.cse.getResult(queryText, function(data) {
        console.log("Searching: " + queryText);
        self.cse.getError(function(data) {
          console.log(data);
        });
        if (data.length > 0) {
          self.buildResultList(data, queryText);
          self.cse.getSearchInfo(queryText, function(data) {
            console.log(data);
            self.buildMetadata(data);
          });
        }
        else {
          self.nav.total = 0;
          self.nav.next = -1;
          self.nav.prev = -1;
          self.dom.modal_metadata.hide();
          self.dom.btn_next.hide();
          self.dom.btn_prev.hide();
          self.onQueryError(queryText, "success");
        }
        if (callback instanceof Function) {
          callback();
        }
      });
    };

    self.loadScript();

    return self;
  };

})(jQuery);

var GoogleCustomSearch = "";
(function($) {
  'use strict';

  
  GoogleCustomSearch = function(options) {
    SearchService.apply(this, arguments);
    var self = this;
    var endpoint = "https://www.googleapis.com/customsearch/v1";
    self.addLogo('google');

    
    self.buildResultList = function(data) {
      var html = "";
      $.each(data, function(index, row) {
        var url = row.link;
        var title = row.title;
        var digest = (row.htmlSnippet || "").replace('<br>','');
        html += self.buildResult(url, title, digest);
      });
      html += "<script>try{pjax.refresh(document.querySelector('#u-search'));document.addEventListener('pjax:send',function(){$('#u-search').fadeOut(500);$('body').removeClass('modal-active')});}catch(e){$('#u-search').fadeOut(500);}</script>";
      return html;
    };

    
    self.buildMetadata = function(data) {
      if (data.queries && data.queries.request && data.queries.request[0].totalResults !== '0') {
        self.nav.current = data.queries.request[0].startIndex;
        self.nav.currentCount = data.queries.request[0].count;
        self.nav.total = parseInt(data.queries.request[0].totalResults);
        self.dom.modal_metadata.children('.total').html(self.nav.total);
        self.dom.modal_metadata.children('.range').html(self.nav.current + "-" + (self.nav.current+self.nav.currentCount-1));
        self.dom.modal_metadata.show();
      }
      else {
        self.dom.modal_metadata.hide();
      }
      if (data.queries && data.queries.nextPage) {
        self.nav.next = data.queries.nextPage[0].startIndex;
        self.dom.btn_next.show();
      }
      else {
        self.nav.next = -1;
        self.dom.btn_next.hide();
      }
      if (data.queries && data.queries.previousPage) {
        self.nav.prev = data.queries.previousPage[0].startIndex;
        self.dom.btn_prev.show();
      }
      else {
        self.nav.prev = -1;
        self.dom.btn_prev.hide();
      }
    };

    
    self.query = function(queryText, startIndex, callback) {
      $.get(endpoint, {
        key: self.config.apiKey,
        cx: self.config.engineId,
        q: queryText,
        start: startIndex,
        num: self.config.per_page
      }, function(data, status) {
        if (status === 'success' && data.items && data.items.length > 0) {
          var results = self.buildResultList(data.items);
          self.dom.modal_results.html(results);
        }
        else {
          self.onQueryError(queryText, status);
        }
        self.buildMetadata(data);
        if (callback) {
          callback();
        }
      });
    };

    return self;
  };
})(jQuery);

var HexoSearch;
(function($) {
  'use strict';

  
  HexoSearch = function(options) {
    SearchService.apply(this, arguments);
    var self = this;
    self.config.endpoint = ROOT + ((options||{}).endpoint || "content.json");
    self.config.endpoint = self.config.endpoint.replace("//","/"); //make sure the url is correct
    self.cache = "";

    
    self.contentSearch = function(post, queryText) {
      var post_title = post.title.trim().toLowerCase(),
          post_content = post.text.trim().toLowerCase(),
          keywords = queryText.trim().toLowerCase().split(" "),
          foundMatch = false,
          index_title = -1,
          index_content = -1,
          first_occur = -1;
      if (post_title !== '' && post_content !== '') {
        $.each(keywords, function(index, word) {
          index_title = post_title.indexOf(word);
          index_content = post_content.indexOf(word);
          if (index_title < 0 && index_content < 0) {
            foundMatch = false;
          }
          else {
            foundMatch = true;
            if (index_content < 0) {
              index_content = 0;
            }
            if (index === 0) {
              first_occur = index_content;
            }
          }
          if (foundMatch) {
            post_content = post.text.trim();
            var start = 0, end = 0;
            if (first_occur >= 0) {
              start = Math.max(first_occur-40, 0);
              end = (start === 0) ? Math.min(200, post_content.length) : Math.min(first_occur + 120, post_content.length);
              var match_content = post_content.substring(start, end);
              keywords.forEach(function(keyword) {
                var regS = new RegExp(keyword, "gi");
                match_content = match_content.replace(regS, "<b mark>"+keyword+"</b>");
              });
              post.digest = match_content + "......";
            }
            else {
              end = Math.min(200, post_content.length);
              post.digest = post_content.trim().substring(0, end);
            }
          }
        });
      }
      return foundMatch;
    };

    
    self.buildResultList = function(data, queryText) {
      var results = [],
        html = "";
      $.each(data, function (index, post) {
        if (self.contentSearch(post, queryText))
          html += self.buildResult(post.permalink, post.title, post.digest);
      });
      html += "<script>try{pjax.refresh(document.querySelector('#u-search'));document.addEventListener('pjax:send',function(){$('#u-search').fadeOut(500);$('body').removeClass('modal-active')});}catch(e){$('#u-search').fadeOut(500);}</script>";
      return html;
    };

    
    self.buildMetadata = function(data) {
      self.dom.modal_footer.hide();
    };

    
    self.query = function(queryText, startIndex, callback) {
      if (!self.cache) {
        $.get(self.config.endpoint, {
          key: self.config.apiKey,
          cx: self.config.engineId,
          q: queryText,
          start: startIndex,
          num: self.config.per_page
        }, function(data, status) {
          if (status !== 'success' ||
              !data ||
              (!data.posts && !data.pages) ||
              (data.posts.length < 1 && data.pages.length < 1)
            ) {
            self.onQueryError(queryText, status);
          }
          else {
            self.cache = data;
            var results = "";
            results += self.buildResultList(data.pages, queryText);
            results += self.buildResultList(data.posts, queryText);
            self.dom.modal_results.html(results);
          }
          self.buildMetadata(data);
          if (callback) {
            callback(data);
          }
        });
      }
      else {
        var results = "";
        results += self.buildResultList(self.cache.pages, queryText);
        results += self.buildResultList(self.cache.posts, queryText);
        self.dom.modal_results.html(results);
        self.buildMetadata(self.cache);
        if (callback) {
          callback(self.cache);
        }
      }
    };

    return self;
  };

})(jQuery);