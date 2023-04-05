import {Route, Routes} from "react-router-dom";
import {AllTodoList} from "../../AllTodoList/AllTodoList";
import {ActiveTodoList} from "../../ActiveTodoList/ActiveTodoList";
import {DoneTodoList} from "../../DoneTodoList/DoneTodoList";
import {ArchiveTodoList} from "../../ArchiveTodoList/ArchiveTodoList";
import {NotFound} from "../../../NotFound/NotFound";
import React from "react";

export const TodoRoutes = ({todos, deleteTodo, editTodo, completeTodo, saveTodo, archiveTodo}) => {
    return (
        <Routes>
            <Route path="/all" element={<AllTodoList todos={todos}
                                                     deleteTodo={deleteTodo}
                                                     editTodo={editTodo}
                                                     saveTodo={saveTodo}
                                                     completeTodo={completeTodo}
                                                     archiveTodo={archiveTodo}/>}/>
            <Route path="/active" element={<ActiveTodoList todos={todos}
                                                           deleteTodo={deleteTodo}
                                                           editTodo={editTodo}
                                                           saveTodo={saveTodo}
                                                           completeTodo={completeTodo}
                                                           archiveTodo={archiveTodo}/>}/>
            <Route path="/done" element={<DoneTodoList todos={todos}
                                                       deleteTodo={deleteTodo}
                                                       editTodo={editTodo}
                                                       saveTodo={saveTodo}
                                                       completeTodo={completeTodo}
                                                       archiveTodo={archiveTodo}/>}/>
            <Route path="/archived" element={<ArchiveTodoList todos={todos}
                                                              deleteTodo={deleteTodo}
                                                              editTodo={editTodo}
                                                              saveTodo={saveTodo}
                                                              completeTodo={completeTodo}
                                                              archiveTodo={archiveTodo}/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    )
}
