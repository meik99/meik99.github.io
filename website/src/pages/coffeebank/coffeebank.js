import "./coffeebank.scss";
import {
    AddCustomer, AddProduct,
    Customers,
    CustomerSettings, DeleteCustomer, DeleteProduct,
    ErDiagramm,
    Products, ProductSettings,
    Settings,
    Transactions
} from "../../assets/img/coffeebank";

function CoffeeBank() {
    return (
        <div className="container w-700">
            <div className="row mt-4">
                <div className="col-12">
                    <h1>CoffeeBank</h1>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <p className="text-justify">
                        This app was created, to keep track of who bought what in
                        an employee kitchen environment.
                    </p>
                    <p className="text-justify">
                        Employees of a firm wanted a mostly informal way to track
                        credit that was built up when buying items such as a cup
                        of coffee or a snack bar. The cost of such a product was
                        not payed immediately after taking it, but was written
                        down on a tally sheet. Miscalculation of totals
                        and forgetting to write the consumption of a product
                        down was common. These problems were alleviated after
                        the introduction of this application.
                    </p>
                    <p className="text-justify">
                        Please note that figures are not visible
                        on small screens such as phones
                    </p>
                    <p className="text-justify">
                        Source: <a href="https://github.com/meik99/CoffeeBank">CoffeeBank on GitHub</a><br/>
                    </p>
                    <hr/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h2 id="technology">Technologies Used</h2>
                    <hr/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h3>Android</h3>
                    <p className="text-justify">
                        An operating system from Google, that is mostly made for smartphones and tablets.
                        This app uses Android as its target platform, the Android-SDK. It was developed
                        using the AndroidStudio IDE.
                    </p>

                    <h3>Kotlin</h3>
                    <p className="text-justify">
                        A JVM-based language, which removes the need for boiler plate code that
                        is needed when using Java. It also adds useful functionalities that are not
                        available in Java such as extension methods. Since it compiles to JVM byte code,
                        it is interchangeable with Java. Kotlin and Java can even be used in the same project.
                    </p>

                    <h3>Room</h3>
                    <p className="text-justify">
                        Room is a library from the Android Jetpack suit which helps with data manipulation
                        with a SQLite database, by providing ORM functionality and easier implementation
                        of entities and DAOs.
                    </p>

                    <h3>DataBinding and LiveData</h3>
                    <p className="text-justify">
                        The Android Jetpack suit also provides a library that enables the use
                        of data binding in Android applications. One-way as well as two-way data binding
                        is possible with it by using LiveData objects.
                    </p>

                    <h3>GSON</h3>
                    <p className="text-justify">
                        GSON is a JSON library by Google for Java. It can create JSON strings
                        from Java objects and can parse JSON strings to Java objects. Since Kotlin
                        and Java are interchangeable, it also works with Kotlin and this application.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <hr/>
                    <h2 id="usecase1">Buying Products</h2>
                    <hr/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <p className="text-justify">
                        The first use case of this app was to enable customers
                        to buy products. To achieve this, a SQLite database was
                        added. The entities of which are displayed in Fig. 1.
                    </p>
                    <p className="text-justify">
                        To write data to the database and read from it, the Android
                        library "Room" was used, which is an OR-Mapper specifically
                        made for Android apps. The DAOs that were created, where
                        then encapsulated in facades, which are the connecting
                        classes between this database layer and other layers of
                        the application.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <img className="side-img" src={ErDiagramm}
                         alt="ER-Diagramm of CoffeeBank"/>
                    <br/>
                    Fig. 1: ER-Diagramm of CoffeeBank.
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <p className="text-justify">
                        To let users interact with the data and buy products,
                        two screens were added. One screen, as seen as in Fig. 2,
                        displays every customer that is registered in the app.
                        When a user clicks on a customer, the app navigates to
                        the second screen, as seen as in Fig. 3, where a product
                        can be bought by clicking on it. Notice that there is no form
                        of authentication, as the requirement for this process was
                        to be easy and fast. Since the app is only used in a trusted environment,
                        e.g. an office kitchen, no authentication is needed.
                    </p>
                    <p className="text-justify">
                        When a product has been bought, its price is added to the customers
                        credit and its stock is decreased by one. After buying an item,
                        the app navigates back to the customer selection screen. The transaction
                        is then logged and saved in the database.
                    </p>
                </div>

                <div className="col-md-6 col-sm-12 text-center">
                    <img className="w-100" src={Customers} alt="Customer Listing"/>
                    <br/>
                    Fig. 2: Listing of customers
                </div>
                <div className="col-md-6 col-sm-12 text-center">
                    <img className="w-100" src={Products} alt="Product Listing"/>
                    <br/>
                    Fig. 3: Listing of products
                </div>
            </div>


            <div className="row mt-5">
                <div className="col-12">
                    <hr/>
                    <h2 id="usecase2">Nullifying Transactions</h2>
                    <hr/>
                </div>
            </div>


            <div className="row">
                <div className="col-12">
                    <p className="text-justify">
                        The second use case of this application was to enable an
                        administrator to remove unwanted transactions. E.g. transactions
                        that were made unintentionally or by mistake.
                    </p>
                    <p className="text-justify">
                        To implement this use case, a settings screen was implemented. The
                        setting in the scope of this use case, is the "Transactions" setting.
                        By clicking on it, the application navigates to a list of the last 1000
                        transactions that have been made, sorted descending by date, or in other words,
                        the latest transactions is listed as the first one. The settings screen can be seen
                        in Fig. 4, whereas the list of transactions is displayed in Fig. 5.
                    </p>
                    <p className="text-justify">
                        When a transaction is removed the following steps are executed:
                    </p>
                    <ol>
                        <li>Is the product with 'uid == productId' available?
                            <ol className="no-style">
                                <li>Yes: Increase the stock value by one</li>
                                <li>No: Do nothing</li>
                            </ol>
                        </li>
                        <li>Is the customer with 'uid == customerId' available?
                            <ol className="no-style">
                                <li>Yes: Decrease customers credit by 'productPrice'</li>
                                <li>No: Do nothing</li>
                            </ol>
                        </li>
                        <li>
                            Delete transaction
                        </li>
                    </ol>
                </div>
                <div className="col-md-6 col-sm-12 text-center">
                    <img className="w-100" src={Settings} alt="Settings"/>
                    <br/>
                    Fig. 4: Settings
                </div>
                <div className="col-md-6 col-sm-12 text-center">
                    <img className="w-100" src={Transactions} alt="Transaction Listing"/>
                    <br/>
                    Fig. 5: Listing of transactions
                </div>
            </div>


            <div className="row mt-5">
                <div className="col-12">
                    <hr/>
                    <h2 id="usecase3">Modifying Customers and Products</h2>
                    <hr/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <p className="text-justify">
                        The third use case was to enable an administrator to
                        modify customers and products. Be it adding, removing or updating them.
                    </p>
                    <p className="text-justify">
                        The fields of a customer that had to be modifiable are
                        their first- and surname, as well as their balance and
                        their preferred color.
                    </p>
                    <p className="text-justify">
                        Changing values of a customer, in the list seen in Fig. 6, are
                        saved automatically in the database, without further user interaction.
                        Adding customers can be done by clicking the "+" button and filling
                        in the dialog that is seen in Fig. 7. Removing customers can be done
                        by clicking the 'Remove' button and accepting the following dialog
                        seen in Fig. 8.
                    </p>
                    <p className="text-justify">
                        By changing the customers color the background color of the customer
                        list items seen in Fig. 2 is changed according to the color. The font
                        color remains unchanged.
                    </p>
                    <p className="text-justify">
                        The fields of a product that had to be modifiable are
                        its name, stock and its price. Modifications of products,
                        adding, removing and updating, are done the same way as
                        modifications of customers. See Fig. 9, 10 and 11.
                    </p>
                </div>
                <div className="col-md-4 col-sm-6 text-center">
                    <img className="w-100" src={CustomerSettings} alt="Customer Settings"/>
                    <br/>
                    Fig. 6: Customer Settings
                </div>
                <div className="col-md-4 col-sm-6 text-center">
                    <img className="w-100" src={AddCustomer} alt="Adding Customer"/>
                    <br/>
                    Fig. 7: Adding Customer
                </div>
                <div className="col-md-4 col-sm-6 text-center">
                    <img className="w-100" src={DeleteCustomer} alt="Removing Customer"/>
                    <br/>
                    Fig. 8: Removing Customer
                </div>
                <div className="col-md-4 col-sm-6 text-center">
                    <img className="w-100" src={ProductSettings} alt="Product Settings"/>
                    <br/>
                    Fig. 9: Product Settings
                </div>
                <div className="col-md-4 col-sm-6 text-center">
                    <img className="w-100" src={AddProduct} alt="Adding Product"/>
                    <br/>
                    Fig. 10: Adding Product
                </div>
                <div className="col-md-4 col-sm-6 text-center">
                    <img className="w-100" src={DeleteProduct} alt="Removing Product"/>
                    <br/>
                    Fig. 11: Removing Product
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <hr/>
                    <h2 id="usecase4">Setting a Password</h2>
                    <hr/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <p className="text-justify">
                        The fourth use case was to enable an administrator
                        to set a password, which is asked for before the settings
                        menu can be accessed. Although the environment is assumed
                        to be trusted enough so customers do not need any authentication,
                        it is not trusted enough to not have a password for the settings screen,
                        since users could remove their credit from their accounts or change
                        the credit of other users. This functionality should be exclusive to
                        a administrator.
                    </p>
                </div>
                <div className="col-12">
                    <p className="text-justify">
                        The password can be set by clicking on the 'Password' menu item on the settings
                        screen, which open a simple dialog, where the password can be changed. By clicking
                        on the settings button seen in Fig. 2, the existence of a password is evaluated.
                        If a password exists, a dialog is shown, in which it must be entered. By entering a
                        wrong password, a Snackbar informing the user it, is shown, otherwise the settings
                        screen is opened. The password can be removed by entering an empty string in
                        the dialog that is used to change the password.
                    </p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <hr/>
                    <h2 id="usecase5">Creating a Report</h2>
                    <hr/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <p className="text-justify">
                        The fifth use case was to enable an administrator to
                        create report of the last transactions. For practical
                        purposes and technical limitations the amount of
                        transactions that are exported as a report is limited
                        to the latest 1000 transactions sorted descending
                        by date.
                    </p>
                    <p className="text-justify">
                        When clicking on the 'Create Report' setting, the application
                        asks for permissions to write to the external storage, if it
                        does not have these permissions. If the permissions are granted,
                        a file-chooser is opened with an implicit intent, so that the
                        selection of a path is done by a system app and a directory
                        chooser hadn't had to be implemented.
                    </p>
                    <p className="text-justify">
                        A created report is a csv file. The columns are
                        Transaction Id, Date of the transaction, first- and surname
                        of the customer that created the transaction and the product, with
                        its price, that was bought.
                    </p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <hr/>
                    <h2 id="usecase6">Creating and Reading a Backup</h2>
                    <hr/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <p className="text-justify">
                        The sixth use case was to enable an administrator
                        to create a backup of customer, product and transaction
                        data. Facing the same limitations as other query implementations,
                        the backup of data is limited to the first 1000 customers,
                        the first 1000 products and the last 1000 transactions.
                    </p>
                    <p className="text-justify">
                        Similarly to creating a report, when creating a backup, the permission
                        to write to external storage is asked for and the location to save to
                        is chosen by an directory chooser, via an implicit intent. The backup
                        is then written as a json-object, consisting of the customers, products and
                        transactions, each as an array in the object.
                    </p>
                    <p className="text-justify">
                        When reading a backup, the location of the backup is asked for
                        by a directory chooser, via an implicit intent. Then the data is
                        deserialized from the json object and the respective arrays for
                        customers, products and transactions. By reading a backup, current
                        data that might be stored is deleted.
                    </p>
                    <p className="text-justify">
                        De- and serialization is done by using GSON, a JSON library by Google,
                        that automatically creates JSON-Objects from objects and also
                        that can also create objects from JSON-Objects.
                    </p>
                </div>
            </div>

            <div className="row mb-5"></div>
        </div>
    );
}

export default CoffeeBank;