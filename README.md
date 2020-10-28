# Локальная сборка

1. Установить как в инструкции

    https://jekyllrb.com/docs/installation/#requirements
    
2. Установить дополнительно Jekyll версии 3.9.0
    
    т.к. это текущая поддерживаемая гитхабом `gem install jekyll -v 3.9.0`
    
3. Создать проект
    
    `jekyll _3.9.0_ new --force .`
    
    могут быть изменения в файлы, поэтому лучше проверить

4. Изменить в Gemfile

    Закомментить строку 11 (с версией jekyll)

    Раскомментить строку 18 и изменить её на `gem "github-pages", "~> 209", group: :jekyll_plugins`

5. Задеплоить сайт локально
    
    ```shell script
    bundle exec jekyll _3.9.0_ serve
    ```
    1. При необходимости сделать как написано в консоли и повторить
        
        ```shell script
        bundle install
        bundle update
        ```
