Feature: Book a place
    Scenario: Should book one place
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user choose place
        Then user sees button become enable

    Scenario: Should book two places
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user choose two places
        Then user sees button become enable

    Scenario: Can`t book place
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user choose twice one place
        Then user sees button become disable