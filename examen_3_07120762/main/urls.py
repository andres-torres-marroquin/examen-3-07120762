from django.conf.urls.defaults import patterns, include, url


urlpatterns = patterns('main.views',
    url(r'^', 'home', name='home'),
)
