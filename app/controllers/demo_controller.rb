class DemoController < ApplicationController

  layout false
  def index
    render('demo/index')
  end

  def hello
    redirect_to(:controller => 'demo', :action => 'index')
  end
end
