class DemoController < ApplicationController

  layout false
  def index
    render('demo/index')
  end

  def hello
    @array = [1,2,3,4,5]
  end
end
