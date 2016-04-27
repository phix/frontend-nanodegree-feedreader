$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

    });

    describe('url defined test', function() {
          function isUrlDefined(url,x) {
            it('url should not be empty and is defined', function() {
             expect(allFeeds[x].url).toBeDefined();
              expect(url.length).not.toBe(0);
            });
          }

          for(var x = 0; x < allFeeds.length; x++) {
            isUrlDefined(allFeeds[x].url, x);
          }
    });

    describe('name defined test', function() {
          function isNameDefined(name,x) {
            it('name should not be empty and is defined', function() {
             expect(allFeeds[x].name).toBeDefined();
             expect(name.length).not.toBe(0);
            });
          }

          for(var x = 0; x < allFeeds.length; x++) {
            isNameDefined(allFeeds[x].name, x);
          }
    });

    describe('The menu', function() {
        it('menu is hidden', function() {
            expect($("body").hasClass('menu-hidden')).toBe(true);          
        });
        it("menu changes", function() {
          $('.menu-icon-link').click();
          expect($("body").hasClass('menu-hidden')).toBe(false);
          $('.menu-icon-link').click();
          expect($("body").hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        
        it('has entry', function() {
            var $entry = $('.feed').find('.entry');
            expect($entry.length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {
      var $preHeader;
      var $postHeader;

        beforeEach(function(done) {
            loadFeed(0, function() {
                $preHeader = $('.header-title').html();
                loadFeed(1, function() {
                    $postHeader = $('.header-title').html();
                    done();
                })
            })
        })

      it("expects new content", function() {
        expect($preHeader).not.toEqual($postHeader);
      });

      // beforeAll(function(done) {
      //   loadFeed(0, done);
      //   $preHeader = $('.header-title').html();
      // });

      // afterAll(function(done) {
      //   loadFeed(0, done);
      //   $postHeader = $('.header-title').html();
      // });

      // it("expects new content", function() {
      //   expect($preHeader).not.toEqual($postHeader);
      // });
    });         
}());
