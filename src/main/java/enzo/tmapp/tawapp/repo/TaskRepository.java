package enzo.tmapp.tawapp.repo;

import enzo.tmapp.tawapp.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
